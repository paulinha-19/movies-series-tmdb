import React, { useContext } from 'react';
//componentes
import MoviePopular from '../Movies/Popular/MoviePopular';
import SeriePopular from '../Series/SeriePopular/SeriePopular';
//css
import '../Movies/MovieList/MovieListHome.css';

const Home = () => {
    return (
        <>
            <SeriePopular />
            <MoviePopular />
        </>
    );
}

export default Home