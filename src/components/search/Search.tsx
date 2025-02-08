import { useEffect, useRef } from "react";
import styles from "./search.module.css";

type SeachProps = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export const Search = ({ handleChange, value }: SeachProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  });

  return (
    <input
      ref={inputRef}
      className={styles.input}
      type="text"
      placeholder="Search characters..."
      onChange={(e) => handleChange(e)}
      value={value}
    />
  );
};
