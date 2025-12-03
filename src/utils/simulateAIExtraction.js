import { APPROVED_COUNTERPARTIES, COMMODITIES, LOCATIONS } from '../constants/domain';

export const simulateAIExtraction = (text) =>
  new Promise((resolve) => {
    setTimeout(() => {
      const normalized = text.toLowerCase();
      const commodity =
        COMMODITIES.find((c) => normalized.includes(c.toLowerCase().split(' ')[0])) || null;
      const counterparty =
        APPROVED_COUNTERPARTIES.find((c) => normalized.includes(c.toLowerCase())) || null;
      const volMatch = text.match(/(\d{1,3}(?:,\d{3})*|\d+)\s*(?:bbl|barrels|MMBtu|units)/i);
      const volume = volMatch ? parseInt(volMatch[1].replace(/,/g, ''), 10) : null;
      const priceMatch = text.match(/(?:\$|at\s)(\d+\.?\d*)/i);
      const price = priceMatch ? parseFloat(priceMatch[1]) : null;
      const location =
        LOCATIONS.find((l) => normalized.includes(l.toLowerCase().split(',')[0])) || 'Unknown';

      resolve({
        commodity,
        counterparty,
        volume,
        price,
        location,
        confidence: commodity && volume && typeof price === 'number' ? 0.95 : 0.6
      });
    }, 1200);
  });

