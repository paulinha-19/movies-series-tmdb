import React, { useContext } from "react";
import MovieListHome from "./MovieList/MovieListHome";
//config
import { MOVIES_DESC_POPULAR, MOVIES_TRENDING_DAY, MOVIES_NOW_PLAYING, MOVIES_TOP_RATED } from '../../api/config';

const MovieHomeCategory = () => {
  return (
    <div>
      <MovieListHome title={"Popular"} urlAPI={MOVIES_DESC_POPULAR} />
      <MovieListHome title={"Tendências globais"} urlAPI={MOVIES_TRENDING_DAY} />
      <MovieListHome title={"Nos cinemas"} urlAPI={MOVIES_NOW_PLAYING} />
      <MovieListHome title={"Bem avaliados TMDB"} urlAPI={MOVIES_TOP_RATED} />
    </div>
  )
}

export default MovieHomeCategory