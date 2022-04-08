import React, { useContext } from 'react';
import Loader from '../../Loader';
import PosterPathTv from '../PosterPathTv';
import { MoviesContext } from '../../../context/MoviesContext';
//query
import { useQuery } from 'react-query';
//css
import '../../Movies/MovieList/MovieListHome.css'


const SeriePopular = () => {
  const { getSeriePopular } = useContext(MoviesContext);
  const { data, isError, error, isLoading, isFetching } = useQuery("seriePopular", getSeriePopular, {
    cacheTime: 5000,
  });

  return (
    <>
      <div className="row">
        <h2 className="row__title">Populares TMDB</h2>
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
                    <PosterPathTv {...movie} key={movie.id} />
                  );
                })
              )}
        </div>
      }
    </>
  )
}

export default SeriePopular