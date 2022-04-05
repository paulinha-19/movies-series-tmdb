import React, { useContext } from 'react';
//componentes
import MoviePopularDesc from '../Movies/Popular/MoviePopularDesc';
import SeriePopular from '../Series/SeriePopular/SeriePopular';
//css
import '../Movies/MovieList/MovieListHome.css';

const Home = () => {
    return (
        <>
            <SeriePopular />
            <MoviePopularDesc />
        </>
    );
}

export default Home