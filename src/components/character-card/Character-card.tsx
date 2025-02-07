import { ICharacter } from "../../types/types";
import styles from "./character-card.module.css";

function formatDate(isoString: string) {
  return new Date(isoString).toLocaleDateString("ru-RU");
}

export const CharacterCard = ({ name, status, created }: ICharacter) => {
  return (
    <div className={styles.container}>
      <h3>{name}</h3>
      <div className={styles.additional}>
        <div>
          <span>Status: </span>
          <span className={styles[status]}>{status}</span>
        </div>

        <span>Created: {formatDate(created)}</span>
      </div>
    </div>
  );
};
