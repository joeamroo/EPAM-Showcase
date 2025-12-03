import React from 'react';

export const DataPoint = ({ label, value, isRequired }) => (
  <div>
    <span className="text-slate-500 block text-xs uppercase">{label}</span>
    <span className={`font-semibold ${value ? 'text-white' : 'text-red-400'}`}>
      {value || (isRequired ? 'MISSING' : '—')}
    </span>
  </div>
);

