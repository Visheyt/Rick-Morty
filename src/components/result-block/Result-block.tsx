import { ICharacter } from "../../types/types";
import { CharacterCard } from "../character-card/Character-card";
import styles from "./result-block.module.css";

type ResultBlockParams = {
  result: ICharacter[];
};

export const ResultBlock = ({ result }: ResultBlockParams) => {
  return (
    <div className={styles.container}>
      <span>Found characters: {result.length}</span>
      <div className={styles.cards}>
        {result.map((character) => (
          <CharacterCard {...character} />
        ))}
      </div>
    </div>
  );
};
