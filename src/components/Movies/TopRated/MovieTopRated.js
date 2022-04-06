import React, { useEffect, useContext } from 'react';
import DefaultPosterPath from '../../DefaultPosterPath';
import axios from 'axios';
import Loader from '../../Loader';
import { MoviesContext } from '../../../context/MoviesContext';
//api
import { MOVIES_TOP_RATED } from '../../../api/config';
//css
import '../MovieList/MovieListHome.css'

const MovieTopRated = () => {
  const { topRated, getMoviesTopRated, setTopRated, loading, setLoading, errorMessage, setErrorMessage } = useContext(MoviesContext);
  // useEffect(() => {
  //   getMoviesTopRated(MOVIES_TOP_RATED);
  // });
  // const getMoviesTopRated = async (URL_API) => {
  //   try {
  //     const moviesResponse = await axios(URL_API);
  //     const dataMovie = (moviesResponse.data.results);
  //     setTopRated(dataMovie);
  //     setErrorMessage("");
  //   }
  //   catch (error) {
  //     alert(error.message);
  //     setErrorMessage(error.message);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }
  return (
    <>
      <div className="row">
        <h2 className="row__title">Bem avaliados TMDB</h2>
      </div>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            loading ? <Loader /> :
              topRated.map((movie) => {
                return (
                  <DefaultPosterPath {...movie} key={movie.id} />
                );
              })
          }
        </div>
      }
    </>
  )
}

export default MovieTopRated