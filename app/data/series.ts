import type { Series } from "~/interfaces/series";

export const series: Series[] = [
  {
    id: "dragon",
    title: "Dragon",
    posterSrc:
      "https://images.unsplash.com/photo-1518709594023-6eab9bab7b23?w=600",
    country: "usa",
    language: "english",

    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: "dragon-s1-e1",
            title: "Episode 1",
            episodeNumber: 1,
            videoSrc:
              "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
          },
          {
            id: "dragon-s1-e2",
            title: "Episode 2",
            episodeNumber: 2,
            videoSrc:
              "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
          },
          {
            id: "dragon-s1-e3",
            title: "Episode 3",
            episodeNumber: 3,
            videoSrc:
              "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_5mb.mp4",
          },
        ],
      },
    ],
  },

  {
    id: "nature",
    title: "Nature World",
    posterSrc:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600",
    country: "uk",
    language: "english",

    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: "nature-s1-e1",
            title: "Forest",
            episodeNumber: 1,
            videoSrc:
              "https://media.w3.org/2010/05/sintel/trailer.mp4",
          },
          {
            id: "nature-s1-e2",
            title: "Ocean",
            episodeNumber: 2,
            videoSrc:
              "https://media.w3.org/2010/05/bunny/trailer.mp4",
          },
        ],
      },
    ],
  },

  {
    id: "space",
    title: "Space Journey",
    posterSrc:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600",
    country: "usa",
    language: "english",

    seasons: [
      {
        seasonNumber: 1,
        episodes: [
          {
            id: "space-s1-e1",
            title: "The Beginning",
            episodeNumber: 1,
            videoSrc:
              "https://media.w3.org/2010/05/video/movie_300.mp4",
          },
          {
            id: "space-s1-e2",
            title: "Beyond Earth",
            episodeNumber: 2,
            videoSrc:
              "https://media.w3.org/2010/05/video/movie_300.webm",
          },
        ],
      },
    ],
  },
];