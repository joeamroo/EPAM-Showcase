import React from 'react';
import { Server } from 'lucide-react';

const TAB_TITLES = {
  dashboard: 'Horizon Analytics Executive View',
  capture: 'Unstructured Data to Allegro Bridge',
  trades: 'Allegro Trade Repository (Live Sync)',
  settings: 'Integration Settings'
};

export const TopBar = ({ activeTab }) => (
  <header className="h-16 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">
    <h2 className="text-lg font-semibold text-white flex items-center">{TAB_TITLES[activeTab]}</h2>
    <div className="flex items-center space-x-4">
      <div className="flex items-center text-xs text-slate-500 space-x-2 bg-slate-950 px-3 py-1.5 rounded border border-slate-800">
        <Server size={12} />
        <span>
          Gateway: <span className="text-green-400">Connected</span>
        </span>
      </div>
      <button className="bg-amber-600 hover:bg-amber-500 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
        + Manual Entry
      </button>
    </div>
  </header>
);

