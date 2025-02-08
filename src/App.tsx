import { useState } from "react";
import "./App.css";
import { useCharacter } from "./hooks/useCharacter";
import { Search } from "./components/search/Search";
import { ResultBlock } from "./components/resultBlock/ResultBlock";

const SEARCH_DELAY = 1000;
const MIN_LENGTH = 4;

function App() {
  const [characterName, setCharacterName] = useState<string>("");
  const { result, error, isLoading } = useCharacter({
    characterName,
    delay: SEARCH_DELAY,
    minLength: MIN_LENGTH,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };
  return (
    <div className="container">
      <Search handleChange={handleChange} />
      {isLoading && <div className="loader">Loading...</div>}
      {error && <div className="error">{error}</div>}
      {!isLoading && !error && result && <ResultBlock result={result} />}
    </div>
  );
}

export default App;
