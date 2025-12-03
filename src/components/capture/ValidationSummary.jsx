import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

export const ValidationSummary = ({ errors }) => (
  <div className="bg-slate-800 rounded-lg p-4 border border-slate-700">
    <h4 className="text-xs font-semibold uppercase text-slate-400 mb-3 tracking-wider">
      Compliance & Credit Check
    </h4>

    {errors.length === 0 ? (
      <div className="flex items-center text-green-400 text-sm bg-green-900/20 p-2 rounded border border-green-900/30">
        <CheckCircle size={16} className="mr-2" />
        Valid. Ready for Allegro Sync.
      </div>
    ) : (
      <div className="space-y-2">
        {errors.map((err) => (
          <div
            key={err}
            className="flex items-center text-red-400 text-sm bg-red-900/20 p-2 rounded border border-red-900/30"
          >
            <AlertTriangle size={16} className="mr-2" />
            {err}
          </div>
        ))}
      </div>
    )}
  </div>
);

