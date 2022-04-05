import React, { useEffect, useContext } from 'react';
import DefaultPosterPath from '../../DefaultPosterPath';
import axios from 'axios';
import Loader from '../../Loader';
import { MoviesContext } from '../../../context/MoviesContext';
//css
import '../MovieList/MovieListHome.css';
//api
import { MOVIES_TRENDING_DAY } from '../../../api/config';

const MovieTrendingDay = () => {
  const { trendingDay, setTrendingDay, loading, setLoading, errorMessage, setErrorMessage } = useContext(MoviesContext);
  useEffect(() => {
    getTrendingDay(MOVIES_TRENDING_DAY);
  });
  const getTrendingDay = async (URL_API) => {
    try {
      const moviesResponse = await axios(URL_API);
      const dataMovie = (moviesResponse.data.results);
      setTrendingDay(dataMovie);
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
      <div className="row">
        <h2 className="row__title">Tendências globais</h2>
      </div>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            loading ? <Loader /> :
              trendingDay.map((movie) => {
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

export default MovieTrendingDay