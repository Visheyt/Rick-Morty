import { ICharacter } from "../../types/types";
import { formatDate } from "../../utils/formatDate";
import styles from "./characterCard.module.css";

type Props = Pick<ICharacter, "name" | "status" | "created" | "url">;

export const CharacterCard = ({ name, status, created, url }: Props) => {
  return (
    <a className={styles.container} href={url}>
      <h3>{name}</h3>
      <div className={styles.additional}>
        <div>
          <span>Status: </span>
          <span className={styles[status]}>{status}</span>
        </div>
        <span>Created: {formatDate(created)}</span>
      </div>
    </a>
  );
};
