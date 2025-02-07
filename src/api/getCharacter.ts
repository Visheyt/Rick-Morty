const BASE_URL = "https://rickandmortyapi.com/api";

export async function getCharacter(characterName: string) {
  const url = `${BASE_URL}/character/?name=${characterName}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`API error: ${res.status} ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch {
    throw new Error("Something goes wrong");
  }
}
