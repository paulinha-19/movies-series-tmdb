import React from 'react';

const Genres = (props) => {
  const { genre } = props;
  return (
    <button className="btn btn-app">
      {(genre.name).join(", ")}
    </button>
  );
};
export default Genres;