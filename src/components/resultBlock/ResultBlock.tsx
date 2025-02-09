import { ICharacter } from "../../types/types";
import { CharacterCard } from "../characterCard/CharacterCard";
import styles from "./resultBlock.module.css";

type ResultBlockParams = {
  result: ICharacter[];
};

export const ResultBlock = ({ result }: ResultBlockParams) => {
  return (
    <div className={styles.container}>
      {result.length ? (
        <span className={styles.resultCount}>
          Found characters: {result.length}
        </span>
      ) : (
        ""
      )}
      <div className={styles.cards}>
        {result.map((character) => (
          <CharacterCard
            key={character.id}
            name={character.name}
            created={character.created}
            status={character.status}
            url={character.url}
          />
        ))}
      </div>
    </div>
  );
};
