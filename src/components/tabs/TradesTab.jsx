import React from 'react';
import { Database } from 'lucide-react';

export const TradesTab = ({ trades }) => (
  <div className="bg-slate-900 rounded-lg border border-slate-800 overflow-hidden shadow-lg">
    <div className="p-4 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
      <h3 className="font-medium text-white flex items-center">
        <Database size={16} className="mr-2 text-amber-500" /> Trade Blotter
      </h3>
      <div className="flex space-x-2">
        <span className="text-xs text-slate-500 flex items-center mr-4">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2" />
          Live Connection
        </span>
        <button className="px-3 py-1 bg-slate-800 text-xs rounded text-slate-300 border border-slate-700 hover:bg-slate-700">
          Export XML
        </button>
      </div>
    </div>
    <table className="w-full text-left text-sm text-slate-400">
      <thead className="bg-slate-950 text-xs uppercase font-medium text-slate-500">
        <tr>
          <th className="px-6 py-4">Trade ID</th>
          <th className="px-6 py-4">Date</th>
          <th className="px-6 py-4">Counterparty</th>
          <th className="px-6 py-4">Commodity</th>
          <th className="px-6 py-4 text-right">Volume</th>
          <th className="px-6 py-4 text-right">Price</th>
          <th className="px-6 py-4">Sync Status</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-slate-800">
        {trades.map((trade) => (
          <tr key={trade.id} className="hover:bg-slate-800/50 transition-colors">
            <td className="px-6 py-4 font-mono text-amber-500">{trade.id}</td>
            <td className="px-6 py-4">{trade.date}</td>
            <td className="px-6 py-4 text-white font-medium">{trade.counterparty}</td>
            <td className="px-6 py-4">
              <span className="bg-slate-800 px-2 py-1 rounded text-xs border border-slate-700">
                {trade.commodity}
              </span>
            </td>
            <td className="px-6 py-4 text-right font-mono text-white">
              {trade.volume.toLocaleString()}{' '}
              <span className="text-slate-600 text-xs">{trade.unit}</span>
            </td>
            <td className="px-6 py-4 text-right font-mono text-green-400">${trade.price.toFixed(2)}</td>
            <td className="px-6 py-4">
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                  trade.status === 'Synced'
                    ? 'bg-green-900/20 text-green-400 border-green-900/50'
                    : trade.status === 'Error'
                    ? 'bg-red-900/20 text-red-400 border-red-900/50'
                    : 'bg-amber-900/20 text-amber-400 border-amber-900/50'
                }`}
              >
                {trade.status === 'Synced' ? 'DB_COMMIT' : trade.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

