import styles from "./search.module.css";

type SeachProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Search = ({ handleChange }: SeachProps) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Search characters..."
      onChange={(e) => handleChange(e)}
    />
  );
};
