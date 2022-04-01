//MOVIES
export const apiKey = "afca2656cc551632bb3c538c9d52ccc3";
export const MOVIES_ALL_POPULAR = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`;

//`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=`;
export const MOVIES_DESC_POPULAR = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc`;

//tendências globais
export const MOVIES_TRENDING_DAY = `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`;

// mais bem avaliados no TMDB
export const MOVIES_TOP_RATED = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`; 

//nos cinemas
export const MOVIES_NOW_PLAYING = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;

//próximos filmes nos cinemas
export const MOVIES_UPCOMING = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}&language=en-US&page=1`;

export const SEARCH_API_MOVIE = `https://api.themoviedb.org/3/search/movie?&api_key=${apiKey}&query=`;
export const MOVIES_API_DETAILS = `https://api.themoviedb.org/3/movie/`;

//SERIES
export const SERIES_ALL_POPULAR = `https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&language=en-US&page=`;
export const SERIES_DESC_POPULAR = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&sort_by=popularity.desc`;
export const SERIES_TRENDING_DAY = `https://api.themoviedb.org/3/trending/tv/day?api_key=${apiKey}`;
export const SEARCH_API_SERIES = `https://api.themoviedb.org/3/search/tv?&api_key=${apiKey}&query=`;
export const SERIES_API_DETAILS = `https://api.themoviedb.org/3/tv/`;

//MOVIES AND SERIES
export const IMAGES_API_MOVIE = 'https://image.tmdb.org/t/p/w1280';
export const ALL_TRENDING_DAY = `https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>`; //colocar na home

