## EssentiaConnect CTRM Demo

EssentiaConnect is a showcase application that demonstrates how Essentia/EPAM can blend AI-assisted parsing with CTRM workflows. The goal is to give interviewers a tangible artifact that mirrors the day-to-day consulting work: connecting unstructured deal chatter to Allegro/Endur-style systems, validating compliance, and surfacing executive dashboards.

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

### Local usage
1. Install dependencies (`npm install` or `pnpm install`) inside your preferred React tooling (Vite, Next, CRA).  
2. Point your bundler’s entry to `src/App.jsx` (or import `App` and render it).  
3. Run the dev server (`npm run dev`) and open the UI.

> The repository exposes `app` as a compatibility shim that simply re-exports `src/App.jsx`, so existing sandboxes keep working.

### Interview talk track
Use this outline to guide the conversation:
1. **Problem framing** – “Energy traders send deals over chat/email; we need to clean, validate, and sync them into Allegro faster.”
2. **AI workflow** – highlight the `useTradeWorkflow` hook for parsing → validation → commit, and mention how you’d swap in a real OpenRouter/LLM call.
3. **Exception management** – walk through the validation cards and how warnings route trades into “Review Required” before hitting the blotter.
4. **Operational visibility** – show the dashboard KPIs and activity log to illustrate executive reporting hooks.
5. **Extensibility** – call out the modular file structure that lets you add new tabs (e.g., risk stress tests) or plug the hook into a backend API layer.

### Next ideas
- Replace `simulateAIExtraction` with a serverless endpoint (OpenRouter) and capture latency/accuracy metrics.
- Persist trades via a lightweight backend (Supabase, FastAPI, Rails) to show end-to-end integration.
- Add automated tests around `useTradeWorkflow` to showcase TDD habits.

Feel free to tailor the sample data, styling, or narrative to align with the specific client vertical you’re interviewing for (gas marketing, power, carbon, etc.). Good luck! 

