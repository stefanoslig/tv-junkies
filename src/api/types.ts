export const Genres = ["Drama", "Comedy", "Science-Fiction", "Sports"];

export interface SearchShow {
  score: number;
  show: Show;
}

export type Shows = Array<SearchShow>;

export interface Show {
  id: number;
  url: string;
  name: string;
  type: string;
  language: string;
  genres: Array<string>;
  status: string;
  runtime: number;
  premiered: string;
  officialSite: string;
  schedule: Schedule;
  rating: Rating;
  weight: number;
  network: Network;
  webChannel: string | null;
  externals: Externals;
  image: Image;
  summary: string;
  updated: number;
  _links: Links;
  _embedded: Cast; // Cast is not the only data we can embed. The other types are not included in this app.
}

export interface Schedule {
  time: string;
  days: Array<string>;
}

export interface Rating {
  average: number;
}

export interface Country {
  name: string;
  code: string;
  timezone: string;
}

export interface Network {
  id: number;
  names: string;
  country: Country;
}

export interface Externals {
  tvrage: number;
  thetvdb: number;
  imdb: string;
}

export interface Image {
  medium: string;
  original: string;
}

export interface Links {
  self?: Link;
  previousepisode?: Link;
  show?: Link;
  character?: Link;
}

export interface Link {
  href: string;
}

export interface Person {
  id: number;
  name: string;
  url: string;
  country: Country;
  birtday: string;
  deathday: string | null;
  image: Image;
  _links: Links;
}
export interface Character {
  id: number;
  url: string;
  name: string;
  image: Image;
  _links: Links;
}
export interface Cast {
  cast: Array<{
    person: Person;
    character: Character;
    self: boolean;
    voice: boolean;
  }>;
}
