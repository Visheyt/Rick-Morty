import "./App.css";
import { ErrorBoundary } from "./errorBoundary/errorBoundary";
import { SearchPage } from "./pages/SearchPage";

function App() {
  return (
    <ErrorBoundary>
      <SearchPage />
    </ErrorBoundary>
  );
}

export default App;
