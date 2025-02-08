import { ICharacter } from "../../types/types";
import { formatDate } from "../../utils/formatDate";
import styles from "./characterCard.module.css";

type Props = Pick<ICharacter, "name" | "status" | "created">;

export const CharacterCard = ({ name, status, created }: Props) => {
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
