import React, { useContext } from "react";
import Loader from "../../Loader";
//config
import { MoviesContext } from "../../../context/MoviesContext";
//css
import './MovieListHome.css';

const MovieListHome = ({ category, popular, trendingDay, nowPlaying, topRated }) => {
  const { loading } = useContext(MoviesContext);

  return (
    <>
      <div className="row">
        <h2 className="row__title">{category}</h2>
      </div>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            loading ? <Loader /> :
              <>
                {popular}
                {trendingDay}
                {nowPlaying}
                {topRated}
              </>
          }
        </div>
      }
    </>
  );
}

export default MovieListHome