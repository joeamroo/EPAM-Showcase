import React from 'react';

import { ExtractionPanel } from '../capture/ExtractionPanel';
import { SourceInputCard } from '../capture/SourceInputCard';

export const CaptureTab = ({
  inputText,
  onInputChange,
  onAnalyze,
  isProcessing,
  extractedData,
  validationErrors,
  onSave,
  isSaving
}) => {
  const canParse = inputText.trim().length > 0 && !isProcessing;
  const hasExtraction = Boolean(extractedData);
  const saveDisabled = !hasExtraction || isSaving || isProcessing;
  const saveLabel = validationErrors.length ? 'Commit with Exceptions' : 'Commit to Horizon Database';

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
      <SourceInputCard
        value={inputText}
        onChange={onInputChange}
        onAnalyze={onAnalyze}
        disabled={!canParse}
        isProcessing={isProcessing}
      />

      <ExtractionPanel
        isProcessing={isProcessing}
        extractedData={extractedData}
        validationErrors={validationErrors}
        onSave={onSave}
        isSaving={isSaving}
        saveDisabled={saveDisabled}
        saveLabel={saveLabel}
      />
    </div>
  );
};

