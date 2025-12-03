import React from 'react';
import { Activity, Database, FileText, LayoutDashboard, Settings } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'dashboard', icon: LayoutDashboard, label: 'Horizon Dashboard' },
  { id: 'capture', icon: FileText, label: 'Smart Deal Capture' },
  { id: 'trades', icon: Database, label: 'Allegro Blotter' },
  { id: 'settings', icon: Settings, label: 'Integration Config' }
];

export const Sidebar = ({ activeTab, onSelect, ctrmSystem }) => (
  <div className="w-64 bg-slate-900 border-r border-slate-800 flex flex-col">
    <div className="p-6">
      <div className="flex items-center space-x-2 text-amber-500 mb-2">
        <Activity size={28} />
        <span className="text-xl font-bold text-white tracking-tight">
          Essentia<span className="text-amber-500">Connect</span>
        </span>
      </div>
      <div className="flex items-center space-x-2 bg-slate-800 rounded px-2 py-1">
        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
          Link: {ctrmSystem}
        </span>
      </div>
    </div>

    <nav className="flex-1 mt-4">
      {NAV_ITEMS.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium transition-colors ${
            activeTab === id
              ? 'bg-amber-500/10 text-amber-500 border-r-4 border-amber-500'
              : 'text-slate-400 hover:bg-slate-800 hover:text-slate-100'
          }`}
        >
          <Icon size={18} />
          <span>{label}</span>
        </button>
      ))}
    </nav>

    <div className="p-4 border-t border-slate-800">
      <div className="bg-slate-800 rounded p-3 flex items-center space-x-3 border border-slate-700">
        <div className="h-8 w-8 rounded-full bg-amber-600 flex items-center justify-center font-bold text-white">
          TC
        </div>
        <div>
          <p className="text-sm text-white font-medium">Tech Consultant</p>
          <p className="text-xs text-amber-500">Dev Environment</p>
        </div>
      </div>
    </div>
  </div>
);

