// types/movie.ts
export interface Movie {
  id: string;
  title: string;
  videoSrc: string;
  posterSrc: string;
  subtitlesSrc: string;
  country?: string;
  language?: string;
}