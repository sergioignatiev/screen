// interfaces/movies.ts

export interface Movie {
  id: string;
  title: string;
  videoSrc: string;
  poster?: string;
  subtitlesSrc?: string;
  country?: string;
  language?: string;
}