## EssentiaConnect CTRM Demo

EssentiaConnect is a showcase application that demonstrates how Essentia/EPAM can blend AI-assisted parsing with CTRM workflows. The goal is to showcase a tangible artifact that mirrors the day-to-day consulting work: connecting unstructured deal chatter to Allegro/Endur-style systems, validating compliance, and surfacing executive dashboards.

### Why it stands out
- **Realistic workflow** – captures the analyst journey from email text to Allegro payload, exception review, and trade blotter updates.
- **AI assist** – simulated LLM parsing turns unstructured text into structured CTRM fields with confidence scoring.
- **Consulting polish** – dashboard, compliance visualization, and configuration tab map to the conversations you’ll have with energy clients.
- **Modular React architecture** – hooks + components let you talk through maintainability, testing strategy, and extension points (e.g., swapping the parser for a real API).

### Project structure
```
src/
  App.jsx                         # Orchestrates layout + tab routing
  constants/domain.js             # Shared domain lists (counterparties, locations…)
  data/mockRecords.js             # Dashboard cards, activity log, starter trades
  hooks/useTradeWorkflow.js       # Single source of truth for CTRM workflow state
  utils/simulateAIExtraction.js   # Mock LLM bridge for parsing text
  components/
    layout/Sidebar.jsx            # Brand + nav + status indicator
    layout/TopBar.jsx             # Tab titles + gateway status
    tabs/
      DashboardTab.jsx            # Executive KPIs + activity log
      CaptureTab.jsx              # Wires capture input + extraction panel
      TradesTab.jsx               # Allegro-style trade blotter
      SettingsTab.jsx             # Integration configuration card
    capture/                     # Capture-specific building blocks
      SourceInputCard.jsx
      ExtractionPanel.jsx
      ValidationSummary.jsx
      DataPoint.jsx
```

### Local setup
The repo ships with a lightweight Vite + Tailwind scaffold so you can demo the UI immediately.

1. **Install dependencies**
   ```
   npm install
   ```
2. **Run the dev server**
   ```
   npm run dev
   ```
   Open the URL that Vite prints (default `http://localhost:5173`).
3. **Optional: production build**
   ```
   npm run build
   npm run preview
   ```
   `preview` lets you smoke-test the production bundle locally.

> Vite loads `src/App.jsx` (also re-exported via the `app` directory), and Tailwind compiles the utility classes defined throughout the components.

