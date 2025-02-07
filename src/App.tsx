import { useState } from "react";
import "./App.css";
import { useCharacter } from "./hooks/useCharacter";
import { Search } from "./components/search/Search";

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
      <div>
        {isLoading ? <span>Loading</span> : ""}
        {result.map((character) => (
          <>
            <div>{character.name}</div>
            <img src={character.image} alt="" />
          </>
        ))}
      </div>
    </div>
  );
}

export default App;
