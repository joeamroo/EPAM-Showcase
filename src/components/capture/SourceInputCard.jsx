import React from 'react';
import { Activity, FileText, RefreshCw } from 'lucide-react';

export const SourceInputCard = ({ value, onChange, onAnalyze, disabled, isProcessing }) => (
  <div className="bg-slate-900 p-6 rounded-lg border border-slate-800 flex-1 flex flex-col shadow-lg">
    <h3 className="text-lg font-medium text-white mb-2 flex items-center">
      <FileText className="mr-2 text-amber-500" size={20} />
      Source Data (Email/Chat)
    </h3>
    <p className="text-sm text-slate-400 mb-4">
      Paste trade confirmation text below. The AI will map fields to the Allegro Data Model.
    </p>

    <textarea
      className="flex-1 bg-slate-950 border border-slate-700 rounded-lg p-4 text-slate-300 font-mono text-sm focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none resize-none shadow-inner"
      placeholder="Example: Bought 10k bbl WTI from Shell at $75.20..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />

    <div className="mt-4 flex justify-between items-center">
      <span className="text-xs text-slate-500 flex items-center">
        <Activity size={12} className="mr-1" />
        AI Model Ready
      </span>
      <button
        onClick={onAnalyze}
        disabled={disabled}
        className="bg-amber-600 hover:bg-amber-500 text-white px-6 py-2 rounded-md font-medium flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md"
      >
        {isProcessing ? (
          <>
            <RefreshCw className="animate-spin mr-2" size={18} /> Parsing...
          </>
        ) : (
          <>
            <Activity className="mr-2" size={18} /> Parse Trade
          </>
        )}
      </button>
    </div>
  </div>
);

