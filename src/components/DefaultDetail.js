import React from "react";
import axios from "axios";
import { IMAGES_API_MOVIE, MOVIES_API_DETAILS, apiKey } from "../api/config";
import StarRating from "./StarRating/StarRating";
//query
import { useQuery } from "react-query";
const MovieDetail = ({ title, release_date, poster_path, overview, vote_average, vote_count, id }) => {
    // const { genres, setGenres, setDetails } = useContext(MoviesContext);
    const getDatail = async () => {
        const detailResponse = await axios(`${MOVIES_API_DETAILS}${id}?api_key=${apiKey}&language=en-US`);
        const data = (detailResponse.data.genres);
        return data;
    }
    
    const { data, isError, error, isLoading } = useQuery('tmdb', getDatail);

    
    // useEffect(() => {
    //     getDetails(MOVIES_API_DETAILS);
    // }, []);
    // const getDetails = async (URL_DETAILS) => {
    //     try {
    //         const moviesResponse = await axios(`${URL_DETAILS}${id}?api_key=${apiKey}&language=en-US`);
    //         const detailsMovie = (moviesResponse.data);
    //         setDetails(detailsMovie);
    //         setGenres(detailsMovie.genres);
    //         setErrorMessage("");
    //     }
    //     catch (error) {
    //         alert(error.message);
    //         setErrorMessage(error.message);
    //     }
    //     finally {
    //         setTimeout(() => {
    //             setLoading(false);
    //         }, 3000);
    //     }
    // }
    return (
        <div className="movie_detail">
            <section>
                <img src={poster_path ? IMAGES_API_MOVIE + poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"} alt={title} />
            </section>
            <section>
                <div className="movie_title">
                    {title}
                </div>
                <div className="movie_overview">
                    {overview}
                </div>
                {
                    release_date ? <div className="movie_releaseDate mb-2">
                        <b>Release Date : </b>
                        <span>{release_date}
                        </span>
                    </div>
                        : null
                }
                <div className="Vote_info">
                    <div className="mb-1">
                        <b>Vote Count : </b>
                        <span>{vote_count}</span>
                    </div>
                    <div className="vote_averageField">
                        <div>
                            <b>Vote Average : </b>
                            <span>
                                {vote_average}
                            </span>
                        </div>
                        <div>
                            <StarRating rate={vote_average} />
                        </div>
                    </div>
                </div>
                <div className="vote_averageField">
                    <b>Genre:</b>
                    <span>
                        {data.map(genre => genre.name).join(", ")}
                    </span>
                </div>
            </section>
        </div>
    );
}
export default MovieDetail;