import React, { useEffect, useContext } from "react";
import axios from "axios";
import Movie from "../../Movie";
import Loader from "../../Loader";
//config
import { MOVIES_DESC_POPULAR} from '../../../api/config';
import { MoviesContext } from "../../../context/MoviesContext";
//css
import './MovieListHome.css';
const MovieListHome = ({ title, urlAPI }) => {
  const { movies, setMovies, setSearchTerm, loading, setLoading, setErrorMessage } = useContext(MoviesContext);

  useEffect(() => {
    const getMoviesCategory = async () => {
      try {
        const moviesResponse = await axios(urlAPI);
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
    getMoviesCategory();
  }, []);

  return (
    <>
      <div className="row">
        <h2 className="row__title">{title}</h2>
      </div>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            loading ? <Loader /> :
              movies.map((movie) => {
                return (
                  <Movie {...movie} key={movie.id} />
                );
              })
          }
        </div>
      }
    </>
  );
}

export default MovieListHome