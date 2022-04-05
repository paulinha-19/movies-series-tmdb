import React, { useContext, useEffect } from 'react';
import { SERIES_AIRING_TODAY } from '../../../api/config';
import axios from 'axios';
import Loader from '../../Loader';
import DefaultPosterPath from '../../DefaultPosterPath';
//context
import { MoviesContext } from '../../../context/MoviesContext';
//css
import '../../Movies/MovieList/MovieListHome.css'


const SerieAiringToday = () => {
  const { seriesOnTheAir, setSeriesOnTheAir, loading, setLoading, errorMessage, setErrorMessage } = useContext(MoviesContext);
  useEffect(() => {
    getSeriesAir(SERIES_AIRING_TODAY);
  });
  const getSeriesAir = async (URL_API) => {
    try {
      const seriesResponse = await axios(URL_API);
      const dataSerie = (seriesResponse.data.results);
      setSeriesOnTheAir(dataSerie);
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
        <h2 className="row__title">Series no ar</h2>
      </div>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            loading ? <Loader /> :
              seriesOnTheAir.map((serie) => {
                return (
                  <DefaultPosterPath {...serie} key={serie.id} />
                );
              })
          }
        </div>
      }
    </>
  )
}

export default SerieAiringToday