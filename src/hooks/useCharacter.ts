import { useEffect, useState } from "react";
import { getCharacter } from "../api/getCharacter";
import { useDebounce } from "./useDebounce";

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

interface ICharacter {
  created: string;
  episode: string[];
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}
