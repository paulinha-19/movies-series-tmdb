import React from "react";
//components
import MoviePopular from "./Popular/MoviePopular";
import MovieNowPlaying from "./NowPlaying/MovieNowPlaying";
import MovieTopRated from './TopRated/MovieTopRated';
import MovieUpcoming from './Upcoming/MovieUpcoming';
const MovieHome = () => {
  return (
    <div>
      <MoviePopular />
      <MovieUpcoming />
      <MovieNowPlaying />
      <MovieTopRated />
    </div>
  )
}

export default MovieHome