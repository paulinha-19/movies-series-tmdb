import React, { useContext, useEffect } from "react";
import { MoviesContext } from "../../context/MoviesContext";
import Loader from "../Loader";
import DefaultPosterPath from "../DefaultPosterPath";
import SearchNotFound from "./SearchNotFound";

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
                  <DefaultPosterPath {...movie} key={movie.id} />
                )
              })
              : <SearchNotFound />
          }
        </div>
      }
    </>
  );
};

export default MovieSearch;
