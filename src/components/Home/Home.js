import React, { useContext } from 'react';
import MoviePopularDesc from '../Movies/Popular/MoviePopularDesc';
import Loader from '../Loader';
//context
import { MoviesContext } from '../../context/MoviesContext';
//css
import '../Movies/MovieList/MovieListHome.css';

const Home = () => {
    const { loading } = useContext(MoviesContext);
    return (
        <>
            <div className="row">
                <h2 className="row__title">Filmes populares</h2>
            </div>
            {
                <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
                    {
                        loading ? <Loader /> :
                            <>
                                <MoviePopularDesc />
                            </>
                    }
                </div>
            }
        </>
    )
}

export default Home