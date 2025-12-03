import React from 'react';
import { CheckCircle, ChevronRight } from 'lucide-react';

import { ACTIVITY_LOG, DASHBOARD_CARDS } from '../../data/mockRecords';

export const DashboardTab = () => (
  <div className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {DASHBOARD_CARDS.map(({ id, title, value, meta, metaClass, icon: Icon, highlight }) => (
        <div
          key={id}
          className="bg-slate-800 p-6 rounded-lg border border-slate-700 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Icon size={64} />
          </div>
          <p className="text-slate-400 text-sm font-medium uppercase tracking-wider">{title}</p>
          <h3 className={`text-2xl font-bold mt-2 ${highlight || 'text-white'}`}>{value}</h3>
          <p className={`text-xs mt-1 ${metaClass}`}>
            {meta.includes('Delta') ? (
              <span className="flex items-center">
                <ChevronRight size={12} className="mr-1" />
                {meta}
              </span>
            ) : (
              meta
            )}
          </p>
        </div>
      ))}
    </div>

    <div className="bg-slate-900 rounded-lg border border-slate-800 p-6">
      <h3 className="text-lg font-medium text-white mb-4">Allegro Horizon Activity Log</h3>
      <div className="space-y-4">
        {ACTIVITY_LOG.map((entry) => (
          <div
            key={entry.id}
            className="flex items-center justify-between py-3 border-b border-slate-800 last:border-0"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-900/30 rounded-full text-green-400">
                <CheckCircle size={16} />
              </div>
              <div>
                <p className="text-sm text-slate-200">
                  {entry.message}{' '}
                  <span className="font-mono text-amber-500">{entry.id.toUpperCase()}</span>
                </p>
                <p className="text-xs text-slate-500">{entry.timestamp}</p>
              </div>
            </div>
            <span className="text-xs font-mono text-slate-500">{entry.batch}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

