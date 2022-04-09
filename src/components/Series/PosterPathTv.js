import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../../context/MoviesContext';
import TvDetails from './TvDetails';
import { IMAGES_API_MOVIE } from '../../api/config';
import { Modal } from 'react-bootstrap';
import { useQuery } from 'react-query';
//NoImg
import NoImg from '../../assets/img/no-image2.jpg';

const PosterPathTv = ({ name, id, first_air_date, poster_path, overview, vote_average, vote_count }) => {
    const { favorites, setFavorites, getMovieOrSerieStorage, getSerieDatail } = useContext(MoviesContext);
    const [showStatus, setShowStatus] = useState(false);
    const handleShow = () => setShowStatus(true);
    const handleClose = () => setShowStatus(false);
    const [isFavorite, setIsFavorite] = useState(false);
    //query
    const { data, isError, error, isLoading } = useQuery(['tvDetail', id], getSerieDatail, {
        cacheTime: 1000,
    });
    const genreList = data?.map(genre => genre?.name).join(", ");

    useEffect(() => {
        if (favorites.includes(id)) {
            setIsFavorite(!isFavorite);
        }
    }, []);
    const handlerIcon = (e) => {
        setIsFavorite(!isFavorite);
        if (isFavorite) {
            var index = favorites.indexOf(id);
            favorites.splice(index, 1);
            setFavorites(favorites);
            deleteMovieOrSerie(id);
        }
        else {
            setFavorites(favorites.concat([id]));
            addMovieOrSerie(id);
        }
    }
    const deleteMovieOrSerie = (id) => {
        const FavoriList = getMovieOrSerieStorage();
        var index = FavoriList.indexOf(id)
        FavoriList.splice(index, 1);
        localStorage.setItem("myFavoriList", JSON.stringify(FavoriList));
    }
    const addMovieOrSerie = (id) => {
        const FavoriList = getMovieOrSerieStorage();
        FavoriList.push(id)
        localStorage.setItem("myFavoriList", JSON.stringify(FavoriList))
    }
    return (
        <div>
            <div className="movie">
                <img src={poster_path ? IMAGES_API_MOVIE + poster_path : NoImg} onClick={handleShow} alt={name} />
                <i style={isFavorite ? { color: "#ff0000" } : { color: "#000" }}
                    className={isFavorite ? 'heartIcon bi bi-heart-fill' : 'hidden heartIcon bi bi-heart-fill'}
                    // className={isFavorite ? <FaRegHeart className='heartIcon'/> : <FaRegHeart className='hidden heartIcon'/>}
                    onClick={handlerIcon}>
                </i>
                <div className="">
                    <h6 title="Avaliação dos usuários" className="movie-voteAverage">{vote_average}</h6>
                </div>
            </div>
            <Modal show={showStatus} onHide={handleClose} backdrop="static" className="Modal" >
                <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body >
                    <TvDetails genre={genreList} id={id} name={name} poster_path={poster_path} overview={overview} vote_average={vote_average} vote_count={vote_count} first_air_date={first_air_date} />
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default PosterPathTv