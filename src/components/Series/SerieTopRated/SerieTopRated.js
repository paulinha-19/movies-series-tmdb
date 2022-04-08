import React, { useContext } from 'react';
import Loader from '../../Loader';
import DefaultPosterPath from '../../DefaultPosterPath';
import { MoviesContext } from '../../../context/MoviesContext';
//query
import { useQuery } from 'react-query';
//css
import '../../Movies/MovieList/MovieListHome.css'


const SerieTopRated = () => {
  const { getSerieTopRated } = useContext(MoviesContext);
  const { data, isError, error, isLoading } = useQuery('tmdb', getSerieTopRated);

  return (
    <>
      <div className="row">
        <h2 className="row__title">Bem avaliados TMDB</h2>
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
  )
}

export default SerieTopRated