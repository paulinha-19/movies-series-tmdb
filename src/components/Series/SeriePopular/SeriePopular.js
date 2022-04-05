import React, { useContext, useEffect } from 'react';
import { SERIES_DESC_POPULAR } from '../../../api/config';
import axios from 'axios';
import Loader from '../../Loader';
import DefaultPosterPath from '../../DefaultPosterPath';
//context
import { MoviesContext } from '../../../context/MoviesContext';
//css
import '../../Movies/MovieList/MovieListHome.css'


const SeriePopular = () => {
  const { series, setSeries, loading, setLoading, errorMessage, setErrorMessage } = useContext(MoviesContext);
  useEffect(() => {
    getSeries(SERIES_DESC_POPULAR);
  });
  const getSeries = async (URL_API) => {
    try {
      const seriesResponse = await axios(URL_API);
      const dataSerie = (seriesResponse.data.results);
      setSeries(dataSerie);
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
        <h2 className="row__title">Series populares</h2>
      </div>
      {
        <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
          {
            loading ? <Loader /> :
              series.map((serie) => {
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

export default SeriePopular