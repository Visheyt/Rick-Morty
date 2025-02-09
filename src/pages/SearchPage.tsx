import { useDeferredValue, useState } from "react";
import { ResultBlock } from "../components/resultBlock/ResultBlock";
import { Search } from "../components/search/Search";
import { useCharacter } from "../hooks/useCharacter";
import styles from "./searchPage.module.css";

const SEARCH_DELAY = 1000;
const MIN_SEARCH_LENGTH = 4;

export const SearchPage = () => {
  const [characterName, setCharacterName] = useState<string>("");
  const { result, error, isLoading } = useCharacter({
    characterName,
    delay: SEARCH_DELAY,
    minLength: MIN_SEARCH_LENGTH,
  });

  const defferedResult = useDeferredValue(result);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCharacterName(e.target.value);
  };

  return (
    <div className={styles.container}>
      <Search handleChange={handleChange} value={characterName} />
      {isLoading && <div className={styles.loader}>Loading...</div>}
      {error && <div className={styles.error}>{error}</div>}
      {!isLoading && !error && defferedResult && (
        <ResultBlock result={defferedResult} />
      )}
    </div>
  );
};
