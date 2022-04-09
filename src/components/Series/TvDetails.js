import React from 'react';
import { IMAGES_API_MOVIE } from '../../api/config';
import StarRating from '../StarRating/StarRating';

const DetailTv = ({ genre, name, poster_path, overview, vote_average, vote_count, first_air_date }) => {
  return (
    <div className="movie_detail">
      <section>
        <img src={poster_path ? IMAGES_API_MOVIE + poster_path : "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=740&q=80"} alt={name} />
      </section>
      <section>
        <div className="movie_title">
          {name}
        </div>
        <div className="movie_overview">
          {overview}
        </div>
        {
          first_air_date ? <div className="movie_releaseDate mb-2">
            <b>Release Date : </b>
            <span>{first_air_date}
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
        <div className="genre_info">
          <b>Genre: </b>
          <span>
            {genre}
          </span>
        </div>

      </section>
    </div>
  )
}

export default DetailTv