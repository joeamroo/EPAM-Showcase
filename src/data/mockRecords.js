import { AlertTriangle, DollarSign, TrendingUp } from 'lucide-react';

export const INITIAL_TRADES = [
  {
    id: 'ALG-2024-884',
    counterparty: 'BP',
    commodity: 'WTI Crude',
    volume: 5000,
    price: 74.5,
    unit: 'bbl',
    location: 'Cushing, OK',
    status: 'Synced',
    date: '2024-10-25'
  },
  {
    id: 'ALG-2024-885',
    counterparty: 'Glencore',
    commodity: 'Natural Gas',
    volume: 10000,
    price: 2.85,
    unit: 'MMBtu',
    location: 'Henry Hub',
    status: 'Pending',
    date: '2024-10-26'
  },
  {
    id: 'ALG-2024-886',
    counterparty: 'Unknown',
    commodity: 'WTI Crude',
    volume: 1000,
    price: -5.0,
    unit: 'bbl',
    location: 'Cushing, OK',
    status: 'Error',
    date: '2024-10-27'
  }
];

export const DASHBOARD_CARDS = [
  {
    id: 'net',
    title: 'Net Position (WTI)',
    value: '1.2M bbl',
    meta: 'Delta: +12%',
    metaClass: 'text-green-400',
    icon: TrendingUp
  },
  {
    id: 'pnl',
    title: 'Unrealized PnL',
    value: '$452,000',
    meta: 'Mark-to-Market (EOD)',
    metaClass: 'text-slate-500',
    icon: DollarSign
  },
  {
    id: 'exceptions',
    title: 'Exception Queue',
    value: '3 Trades',
    meta: 'Requires Validation',
    metaClass: 'text-slate-500',
    icon: AlertTriangle,
    highlight: 'text-amber-500'
  }
];

export const ACTIVITY_LOG = [0, 1, 2].map((i) => ({
  id: `ALG-2024-88${i + 4}`,
  batch: `BATCH_JOB_0${i + 1}`,
  message: `Trade ALG-2024-88${i + 4} committed to database`,
  timestamp: `${2 - i} hours ago via API Gateway`
}));

