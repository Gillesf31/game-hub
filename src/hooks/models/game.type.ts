export type Game = {
  readonly id: number;
  readonly name: string;
};

export type FetchGamesResponse = {
  readonly count: number;
  readonly results: Game[];
};
