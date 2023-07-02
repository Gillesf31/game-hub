export type Platform = {
  readonly id: number;
  readonly name: string;
  readonly slug: string;
}

export type Game = {
  readonly id: number;
  readonly name: string;
  readonly background_image: string;
  readonly parent_platforms: { platform: Platform }[];
  readonly metacritic: number;
};

export type FetchGamesResponse = {
  readonly count: number;
  readonly results: Game[];
};
