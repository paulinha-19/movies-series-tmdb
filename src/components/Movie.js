import { useState, useContext, useEffect } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import MovieDetail from './MovieDetail';
import { IMAGES_API_MOVIE } from '../api/config';
import { Modal } from "react-bootstrap";
const Movie = ({ title, id, release_date, poster_path, overview, vote_average, vote_count }) => {
    const { favorites, setFavorites, getMovieStorage, setErrorMessage, loading, setLoading } = useContext(MoviesContext);
    const [showStatus, setShowStatus] = useState(false);
    const handleShow = () => setShowStatus(true);
    const handleClose = () => setShowStatus(false);
    const [ıconStatus, setıconStatus] = useState(false);
    useEffect(() => {
        if (favorites.includes(id)) {
            setıconStatus(!ıconStatus);
        }
    }, []);
    const handlerIcon = (e) => {
        setıconStatus(!ıconStatus);
        if (ıconStatus) {
            var index = favorites.indexOf(id);
            favorites.splice(index, 1);
            setFavorites(favorites);
            deleteMovieToStorage(id);
        }
        else {
            setFavorites(favorites.concat([id]));
            addMovieToStorage(id);
        }
    }
    const deleteMovieToStorage = (id) => {
        const FavoriList = getMovieStorage();
        var index = FavoriList.indexOf(id)
        FavoriList.splice(index, 1);
        localStorage.setItem("myFavoriList", JSON.stringify(FavoriList))
    }
    const addMovieToStorage = (id) => {
        const FavoriList = getMovieStorage();
        FavoriList.push(id)
        localStorage.setItem("myFavoriList", JSON.stringify(FavoriList))
    }
    return (
        <div>
            <div className="movie" >
                <img src={poster_path ? IMAGES_API_MOVIE + poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"} onClick={handleShow} alt={title} />
                <i style={ıconStatus ? { color: "rgb(207, 5, 5)" } : { color: "black" }}
                    className={ıconStatus ? 'heartIcon bi bi-heart-fill' : 'hidden heartIcon bi bi-heart-fill'}
                    onClick={handlerIcon}></i>
            </div>
            <Modal show={showStatus} onHide={handleClose} className="Modal" >
                <Modal.Header closeButton >
                </Modal.Header>
                <Modal.Body >
                    <MovieDetail id={id} poster_path={poster_path} overview={overview} vote_average={vote_average} title={title} release_date={release_date} vote_count={vote_count} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Movie;