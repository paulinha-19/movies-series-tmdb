import React, { useContext } from "react";
//components
import MovieListHome from "./MovieList/MovieListHome";
import MoviePopularDesc from "./Popular/MoviePopularDesc";
import MovieNowPlaying from "./NowPlaying/MovieNowPlaying";
import MovieTopRated from './TopRated/MovieTopRated';
import MovieTrendingDay from './TrendingDay/MovieTrendingDay';
const MovieHome = ({category}) => {
  return (
    <div>
      <MovieListHome category="Popular" popular={<MoviePopularDesc />} />
      <MovieListHome category="Tendências globais" trendingDay={<MovieTrendingDay />} />
      <MovieListHome category="Nos cinemas" nowPlaying={<MovieNowPlaying />} />
      <MovieListHome category="Bem avaliados TMDB" topRated={<MovieTopRated />} />
    </div>
  )
}

export default MovieHome