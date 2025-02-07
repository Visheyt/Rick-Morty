import { useEffect, useState } from "react";
import { getCharacter } from "../api/getCharacter";
import { useDebounce } from "./useDebounce";
import { ICharacter } from "../types/types";

type Params = {
  characterName: string;
  delay: number;
  minLength: number;
};
export const useCharacter = ({ characterName, delay, minLength }: Params) => {
  const [result, setResult] = useState<ICharacter[]>([]);
  const [err, setError] = useState<string | null>(null);
  const [isLoading, setLoading] = useState<boolean>();
  const debounceCharacter = useDebounce(characterName, delay);

  useEffect(() => {
    if (debounceCharacter.length < minLength && !debounceCharacter) return;

    getCharacter(debounceCharacter)
      .then((data) => setResult(data.results))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [debounceCharacter, minLength]);

  return {
    result,
    err,
    isLoading,
  };
};
