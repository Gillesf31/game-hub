export type Game = {
  readonly id: number;
  readonly name: string;
  readonly background_image: string;
};

export type FetchGamesResponse = {
  readonly count: number;
  readonly results: Game[];
};
