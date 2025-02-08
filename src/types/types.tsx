export interface ICharacter {
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

export interface IApiData {
  info: {
    count: number | null;
    pages: number;
    next: string;
    prev: number | null;
  };
  results: ICharacter[];
}
