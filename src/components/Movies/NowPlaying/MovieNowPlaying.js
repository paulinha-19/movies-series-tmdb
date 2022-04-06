import React, { useEffect, useContext } from 'react';
import DefaultPosterPath from '../../DefaultPosterPath';
import axios from 'axios';
import Loader from '../../Loader';
import { MoviesContext } from '../../../context/MoviesContext';
//api
import { MOVIES_NOW_PLAYING } from '../../../api/config';
//css
import '../MovieList/MovieListHome.css';

const MovieNowPlaying = () => {
    const { nowPlaying, getMoviesNowPlaying, setNowPlaying, loading, setLoading, errorMessage, setErrorMessage } = useContext(MoviesContext);
    // useEffect(() => {
    //     getMoviesNowPlaying(MOVIES_NOW_PLAYING);
    // });
    // const getMoviesNowPlaying = async (URL_API) => {
    //     try {
    //         const moviesResponse = await axios(URL_API);
    //         const dataMovie = (moviesResponse.data.results);
    //         setNowPlaying(dataMovie);
    //         setErrorMessage("");
    //     }
    //     catch (error) {
    //         alert(error.message);
    //         setErrorMessage(error.message);
    //     }
    //     finally {
    //         setLoading(false);
    //     }
    // }
    return (
        <>
            <div className="row">
                <h2 className="row__title">No cinema</h2>
            </div>
            {
                <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
                    {
                        loading ? <Loader /> :
                            nowPlaying.map((movie) => {
                                return (
                                    <DefaultPosterPath {...movie} key={movie.id} />
                                );
                            })
                    }
                </div>
            }
        </>
    );
}

export default MovieNowPlaying