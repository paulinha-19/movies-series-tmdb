import React, { useContext } from 'react';
import DefaultPosterPath from '../../DefaultPosterPath';
import Loader from '../../Loader';
import { MoviesContext } from '../../../context/MoviesContext';
//query
import { useQuery } from 'react-query';
//css
import '../MovieList/MovieListHome.css';

const MovieNowPlaying = () => {
    const { getMovieNowPlaying } = useContext(MoviesContext);
    const { data, isError, error, isLoading } = useQuery('tmdb', getMovieNowPlaying);
    return (
        <>
            <div className="row">
                <h2 className="row__title">No cinema</h2>
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
    );
}

export default MovieNowPlaying