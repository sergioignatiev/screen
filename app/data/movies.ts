import type { Movie } from "~/interfaces/movies";

export const movies: Movie[] = [
  {
    id: 'tom-and-jerry',
    title: 'Том и Джерри',
    videoSrc: 'Users/Сергей/Downloads',
    posterSrc: 'https://uploads.ororo-mirror.tv/uploads/show/poster/123/thumb_2Hfse2hCuQiRGannilc4Peh6PwZ.jpg',
    subtitlesSrc: '/subtitles/dragon.en.vtt',
    country:'usa',
    language:'english'
  },{
    id:'pascal',
    title:'Pascal Marquise',
    videoSrc:'https://res.cloudinary.com/slcihrr9/video/upload/v1783263251/Le_Fran%C3%A7ais_Qu%C3%A9b%C3%A9cois_1_1_flzhlz.mp4',
    posterSrc:'https://static.wixstatic.com/media/eb377a_0f92f802b2f44a568497f80cca17c4b5~mv2.jpeg/v1/fill/w_1196,h_672,fp_0.50_0.50,q_90,enc_avif,quality_auto/eb377a_0f92f802b2f44a568497f80cca17c4b5~mv2.jpeg',
    subtitlesSrc:'/subtitles/subtitles.ru.vtt',
    country:'russia',
    language:'russian'
  }
  // можно добавить еще фильмы
]