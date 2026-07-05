import type { Movie } from "~/interfaces/movies";

export const movies: Movie[] = [
  {
    id: 'tom-and-jerry',
    title: 'Том и Джерри',
    videoSrc: '/tomnjerry.mp4',
    posterSrc: 'https://uploads.ororo-mirror.tv/uploads/show/poster/123/thumb_2Hfse2hCuQiRGannilc4Peh6PwZ.jpg',
    subtitlesSrc: '/dragon.en.vtt',
    country:'usa',
    language:'english'
  },{
    id:'pascal',
    title:'Pascal',
    videoSrc:'/video/pascal.mp4',
    posterSrc:'https://static.wixstatic.com/media/eb377a_0f92f802b2f44a568497f80cca17c4b5~mv2.jpeg/v1/fill/w_1196,h_672,fp_0.50_0.50,q_90,enc_avif,quality_auto/eb377a_0f92f802b2f44a568497f80cca17c4b5~mv2.jpeg',
    subtitlesSrc:'/subtitles.ru.vtt',
    country:'russia',
    language:'russian'
  }
  // можно добавить еще фильмы
]