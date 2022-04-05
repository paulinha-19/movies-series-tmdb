import React, { useContext } from "react";
//components
import MoviePopularDesc from "./Popular/MoviePopularDesc";
import MovieNowPlaying from "./NowPlaying/MovieNowPlaying";
import MovieTopRated from './TopRated/MovieTopRated';
import MovieTrendingDay from './TrendingDay/MovieTrendingDay';
const MovieHome = () => {
  return (
    <div>
      <MoviePopularDesc />
      <MovieTrendingDay />
      <MovieNowPlaying />
      <MovieTopRated />
    </div>
  )
}

export default MovieHome