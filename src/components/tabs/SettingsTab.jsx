import React from 'react';
import { Settings } from 'lucide-react';

import { APPROVED_COUNTERPARTIES } from '../../constants/domain';

export const SettingsTab = ({ ctrmSystem, onSystemChange }) => (
  <div className="bg-slate-900 rounded-lg border border-slate-800 p-8 max-w-2xl shadow-lg">
    <h3 className="text-xl font-bold text-white mb-6 flex items-center">
      <Settings className="mr-2" /> Integration Configuration
    </h3>

    <div className="space-y-8">
      <div className="bg-slate-950 p-4 rounded border border-slate-800">
        <h4 className="text-sm font-bold text-amber-500 mb-4 uppercase tracking-wider">
          Target CTRM Environment
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Primary System</label>
            <select
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-white focus:border-amber-500 outline-none"
              value={ctrmSystem}
              onChange={(e) => onSystemChange(e.target.value)}
            >
              <option>Allegro Horizon</option>
              <option>Allegro 8 (Legacy)</option>
              <option>OpenLink Endur v22</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">
              Service Bus URL (Mock)
            </label>
            <input
              type="text"
              value="https://api.essentia-energy.com/horizon/v1/trades"
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-500 font-mono text-xs"
              readOnly
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-400 mb-2">Authentication Token</label>
            <input
              type="password"
              value="************************"
              className="w-full bg-slate-900 border border-slate-700 rounded p-2 text-slate-500 font-mono text-xs"
              readOnly
            />
          </div>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-400 mb-2">Counterparty Mapping (Alias)</label>
        <div className="flex flex-wrap gap-2">
          {APPROVED_COUNTERPARTIES.map((c) => (
            <span
              key={c}
              className="bg-slate-800 text-slate-300 px-3 py-1 rounded-full text-xs border border-slate-700"
            >
              {c}
            </span>
          ))}
          <button className="text-xs text-amber-500 border border-dashed border-amber-600 px-3 py-1 rounded-full hover:bg-amber-900/20">
            + Map New
          </button>
        </div>
      </div>
    </div>
  </div>
);

