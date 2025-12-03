import React from 'react';

import { Sidebar } from './components/layout/Sidebar';
import { TopBar } from './components/layout/TopBar';
import { CaptureTab } from './components/tabs/CaptureTab';
import { DashboardTab } from './components/tabs/DashboardTab';
import { SettingsTab } from './components/tabs/SettingsTab';
import { TradesTab } from './components/tabs/TradesTab';
import { useTradeWorkflow } from './hooks/useTradeWorkflow';

export default function App() {
  const {
    activeTab,
    ctrmSystem,
    trades,
    inputText,
    extractedData,
    validationErrors,
    isProcessing,
    isSaving,
    setActiveTab,
    setCtrmSystem,
    setInputText,
    analyzeTrade,
    commitTrade
  } = useTradeWorkflow();

  const renderTab = () => {
    switch (activeTab) {
      case 'dashboard':
        return <DashboardTab />;
      case 'capture':
        return (
          <CaptureTab
            inputText={inputText}
            onInputChange={setInputText}
            onAnalyze={analyzeTrade}
            isProcessing={isProcessing}
            extractedData={extractedData}
            validationErrors={validationErrors}
            onSave={commitTrade}
            isSaving={isSaving}
          />
        );
      case 'trades':
        return <TradesTab trades={trades} />;
      case 'settings':
        return <SettingsTab ctrmSystem={ctrmSystem} onSystemChange={setCtrmSystem} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-slate-950 text-slate-200 font-sans overflow-hidden">
      <Sidebar activeTab={activeTab} onSelect={setActiveTab} ctrmSystem={ctrmSystem} />

      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar activeTab={activeTab} />
        <main className="flex-1 overflow-y-auto p-8">{renderTab()}</main>
      </div>
    </div>
  );
}

