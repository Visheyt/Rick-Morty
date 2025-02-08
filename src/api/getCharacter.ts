import { IApiData } from "../types/types";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacter: (
  characterName: string
) => Promise<IApiData> = async (characterName) => {
  const url = `${BASE_URL}/character/?name=${characterName}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    const data: IApiData = await res.json();
    return data;
  } catch (error) {
    throw new Error(
      error instanceof Error ? error.message : "Something goes wrong"
    );
  }
};
