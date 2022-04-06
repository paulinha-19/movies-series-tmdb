import React, { useContext } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import DefaultPosterPath from '../DefaultPosterPath';
import '../../css/Favorites.css';

const Fav = () => {
    const { favorites, favoriteHandler } = useContext(MoviesContext);
    return (
        <>
            {favorites?.length ? (
                <div className='favorites'>
                    {favorites.map((movieOrSerie) => (
                        <DefaultPosterPath {...movieOrSerie} key={movieOrSerie.id} isFavorite={movieOrSerie.isFavorite} addFavorite={(e) => favoriteHandler(movieOrSerie, e)}
                        />
                    ))}
                </div>
            ) : (
                <div className='favorite_warning'>
                    Sem favorito(s) no momento.
                </div>
            )}
        </>
    );
}

export default Fav