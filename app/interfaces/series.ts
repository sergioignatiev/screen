export interface Episode {
  id: string;
  title: string;
  episodeNumber: number;
  videoSrc: string;
  subtitlesSrc?: string;
}

export interface Season {
  seasonNumber: number;
  episodes: Episode[];
}

export interface Series {
  id: string;
  title: string;
  posterSrc: string;
  country: string;
  language: string;
  seasons: Season[];
}