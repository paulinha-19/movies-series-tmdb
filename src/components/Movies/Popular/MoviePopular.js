import React, { useContext } from "react";
import { MoviesContext } from "../../../context/MoviesContext";
import Loader from "../../Loader";
import DefaultPosterPath from "../../DefaultPosterPath";
//query
import { useQuery } from "react-query";
//css
import '../MovieList/MovieListHome.css';

const MoviePopularDesc = () => {
  const { getMoviePopular } = useContext(MoviesContext);
  const { data, isLoading, isError, error } = useQuery("moviePopular", getMoviePopular, {
    cacheTime: 5000,
  });

  return (
    <>
      <div className="row">
        <h2 className="row__title">Filmes populares</h2>
      </div>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            isLoading ? <Loader />
              : isError ? (
                <p>{error.message}</p>
              ) : (
                data.map((movie) => {
                  return (
                    <DefaultPosterPath {...movie} key={movie.id} />
                  );
                })
              )}
        </div>
      }
    </>
  );
}


export default MoviePopularDesc; 