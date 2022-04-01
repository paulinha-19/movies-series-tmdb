import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";
import NoMovies from "./NoMovies";

const MovieSearch = ({ searchTerm }) => {
  const { movies, loading, getSearchMovies } = useContext(MoviesContext);
  useEffect(() => {
    getSearchMovies(searchTerm);
  }, [searchTerm, getSearchMovies]);

  return (
    <>
      {loading ? <Loader /> :
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            movies.length ?
              movies.map((movie) => {
                return (
                  <Movie {...movie} key={movie.id} />
                )
              })
              : <NoMovies />
          }
        </div>
      }
    </>
  );
};

export default MovieSearch;
