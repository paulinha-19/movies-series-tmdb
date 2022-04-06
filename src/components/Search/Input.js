import React, { useContext } from "react";
import { MoviesContext } from "../../context/MoviesContext";

const Input = () => {
  const { handleSubmit, handleChange } = useContext(MoviesContext);
  return (
    <form onsubmit={handleSubmit} className="search-form">
      <input
        type="text"
        name="search"
        placeholder="Pesquisar filme/serie"
        className="m-4"
        onChange={handleChange}
      />
      <button type="submit">
        <i className="bi bi-search "></i>
      </button>
    </form>
  );
};

export default Input;
