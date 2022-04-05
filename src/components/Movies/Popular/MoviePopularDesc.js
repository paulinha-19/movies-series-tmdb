import { MOVIES_DESC_POPULAR } from "../../../api/config";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MoviesContext } from "../../../context/MoviesContext";
import Loader from "../../Loader";
import DefaultPosterPath from "../../DefaultPosterPath";
const MoviePopularDesc = () => {
  const { movies, setMovies, loading, setLoading, errorMessage, setErrorMessage } = useContext(MoviesContext);
  useEffect(() => {
    getMovies(MOVIES_DESC_POPULAR);
  });
  const getMovies = async (URL_API) => {
    try {
      const moviesResponse = await axios(URL_API);
      const dataMovie = (moviesResponse.data.results);
      setMovies(dataMovie);
      setErrorMessage("");
    }
    catch (error) {
      alert(error.message);
      setErrorMessage(error.message);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            loading ? <Loader /> :
              movies.map((movie) => {
                return (
                  <DefaultPosterPath {...movie} key={movie.id}/>
                );
              })
          }
        </div>
      }
    </>
  );
}


export default MoviePopularDesc; 