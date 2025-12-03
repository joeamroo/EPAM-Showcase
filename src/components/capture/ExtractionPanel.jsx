import React from 'react';
import { Briefcase, Database, RefreshCw, Save } from 'lucide-react';

import { DataPoint } from './DataPoint';
import { ValidationSummary } from './ValidationSummary';

export const ExtractionPanel = ({
  isProcessing,
  extractedData,
  validationErrors,
  onSave,
  isSaving,
  saveDisabled,
  saveLabel
}) => (
  <div
    className={`bg-slate-900 p-6 rounded-lg border border-slate-800 flex-1 transition-all shadow-lg ${
      isProcessing ? 'opacity-70' : 'opacity-100'
    }`}
  >
    <h3 className="text-lg font-medium text-white mb-4 flex items-center">
      <Database className="mr-2 text-blue-400" size={20} />
      Allegro Data Structure
    </h3>

    {!extractedData && !isProcessing && (
      <div className="h-64 flex flex-col items-center justify-center text-slate-500 border-2 border-dashed border-slate-800 rounded-lg">
        <Briefcase size={48} className="mb-4 opacity-20" />
        <p>No data extracted yet.</p>
      </div>
    )}

    {isProcessing && (
      <div className="h-64 flex flex-col items-center justify-center text-amber-500">
        <RefreshCw size={48} className="animate-spin mb-4" />
        <p className="animate-pulse">Mapping to Schema...</p>
      </div>
    )}

    {extractedData && !isProcessing && (
      <div className="space-y-6">
        <div className="bg-slate-950 rounded-lg p-4 font-mono text-sm border border-slate-700 shadow-inner relative">
          <div className="absolute top-2 right-2 text-[10px] text-slate-600">JSON Payload</div>
          <div className="grid grid-cols-2 gap-4">
            <DataPoint label="Counterparty" value={extractedData.counterparty} isRequired />
            <DataPoint label="Commodity" value={extractedData.commodity} isRequired />
            <DataPoint
              label="Volume"
              value={extractedData.volume ? extractedData.volume.toLocaleString() : null}
              isRequired
            />
            <DataPoint
              label="Price"
              value={
                typeof extractedData.price === 'number' ? `$${extractedData.price.toFixed(2)}` : null
              }
              isRequired
            />
            <DataPoint label="Location" value={extractedData.location} />
            <DataPoint
              label="Confidence"
              value={
                extractedData.confidence ? `${Math.round(extractedData.confidence * 100)}%` : null
              }
            />
          </div>
        </div>

        <ValidationSummary errors={validationErrors} />

        <button
          onClick={onSave}
          disabled={saveDisabled}
          className="w-full bg-green-600 hover:bg-green-500 disabled:bg-slate-700 disabled:text-slate-500 text-white py-3 rounded-md font-medium flex justify-center items-center transition-all shadow-md"
        >
          {isSaving ? (
            <>
              <RefreshCw className="animate-spin mr-2" size={18} /> Pushing to Allegro API...
            </>
          ) : (
            <>
              <Save className="mr-2" size={18} /> {saveLabel}
            </>
          )}
        </button>
      </div>
    )}
  </div>
);

