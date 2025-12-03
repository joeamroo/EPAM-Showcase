import { useCallback, useState } from 'react';

import { APPROVED_COUNTERPARTIES, DEFAULT_INPUT } from '../constants/domain';
import { INITIAL_TRADES } from '../data/mockRecords';
import { simulateAIExtraction } from '../utils/simulateAIExtraction';

export const useTradeWorkflow = () => {
  const [activeTab, setActiveTab] = useState('capture');
  const [ctrmSystem, setCtrmSystem] = useState('Allegro Horizon');
  const [trades, setTrades] = useState(INITIAL_TRADES);
  const [inputText, setInputText] = useState(DEFAULT_INPUT);
  const [extractedData, setExtractedData] = useState(null);
  const [validationErrors, setValidationErrors] = useState([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const analyzeTrade = useCallback(async () => {
    if (!inputText.trim()) return;

    setIsProcessing(true);
    setExtractedData(null);
    setValidationErrors([]);

    try {
      const result = await simulateAIExtraction(inputText);
      const errors = [];

      if (!result.counterparty) {
        errors.push('Could not identify Counterparty.');
      } else if (!APPROVED_COUNTERPARTIES.includes(result.counterparty)) {
        errors.push(`Counterparty '${result.counterparty}' not in Approved List.`);
      }

      if (!result.commodity) errors.push('Could not identify Commodity.');
      if (!result.volume) errors.push('Could not identify Volume.');
      if (typeof result.price !== 'number') {
        errors.push('Could not identify Price.');
      } else if (result.price < 0) {
        errors.push('Price Warning: Negative pricing detected.');
      }

      setExtractedData(result);
      setValidationErrors(errors);
    } finally {
      setIsProcessing(false);
    }
  }, [inputText]);

  const commitTrade = useCallback(() => {
    if (!extractedData || isSaving) return;

    setIsSaving(true);
    const payload = {
      ...extractedData,
      unit: extractedData.commodity?.toLowerCase().includes('gas') ? 'MMBtu' : 'bbl',
      status: validationErrors.length ? 'Review Required' : 'Synced',
      date: new Date().toISOString().split('T')[0]
    };

    setTimeout(() => {
      setTrades((prev) => {
        const nextId = `ALG-2024-${887 + prev.length}`;
        return [{ id: nextId, ...payload }, ...prev];
      });
      setActiveTab('trades');
      setExtractedData(null);
      setValidationErrors([]);
      setIsSaving(false);
    }, 1000);
  }, [extractedData, isSaving, validationErrors.length]);

  return {
    activeTab,
    ctrmSystem,
    trades,
    inputText,
    extractedData,
    validationErrors,
    isProcessing,
    isSaving,
    setActiveTab,
    setCtrmSystem,
    setInputText,
    analyzeTrade,
    commitTrade
  };
};

