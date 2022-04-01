import React from "react";
import { Link } from "react-router-dom";
import Input from "./Input";

const Header = ({ history, handleSubmit }) => {
  return (
    <div className="Navbar_field container">
      <div  >
        <Link to="/" className="logo">
          LOGO
        </Link>
      </div>
      <ul>
        <li >
          <Link to="/popular" className="popular">
            Popular
          </Link>
        </li>
        <li >
          <Link to="/movies" className="movies">
            Movies
          </Link>
        </li>
        <li >
          <Link to="/series" className="series">
            Series
          </Link>
        </li>
        <li >
          <Link to="/favorites" className="myFavorites">
            Favoritos
          </Link>
        </li>
      </ul>
      <Input history={history} handleSubmit={handleSubmit} />
    </div>
  );
};
export default Header;
