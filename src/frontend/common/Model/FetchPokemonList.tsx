export interface IPokemonList {
  count: number;
  previous: string | null;
  results: Array<{
    name: string;
    link: string;
  }>;
  next: string | null;
}
