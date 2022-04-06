import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { SEARCH_API_MOVIE } from "../api/config";
export const MoviesContext = createContext();
const MoviesContextProvider = props => {
  const [movies, setMovies] = useState([]);
  const [trendingDay, setTrendingDay] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [series, setSeries] = useState([]);
  const [seriesOnTheAir, setSeriesOnTheAir] = useState([]);
  const [seriesTopRated, setSeriesTopRated] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [genres, setGenres] = useState([]);
  const [details, setDetails] = useState("");
  const getSearchMovies = async (searchValue) => {
    try {
      const searchResponse = await axios(`${SEARCH_API_MOVIE}${searchValue}`);
      const data = searchResponse.data.results;
      let titleSearch = `Search Results for ${searchValue}`;
      setMovies(data);
      setErrorMessage("");
    }
    catch (error) {
      alert(error.message);
      setErrorMessage(error.message);
    }
    finally {
      setLoading(false);
    }
  }
  const getMovieOrSerieStorage = () => {
    if (localStorage.getItem("favorites")) {
      let favoriteList = JSON.parse(localStorage.getItem("favorites"));
      return favoriteList
    }
    else {
      let favoriteList = []
      return favoriteList
    }
  }
  useEffect(() => {
    const favoriteList = getMovieOrSerieStorage();
    setFavorites(favoriteList);
    getSearchMovies();
  }, []);

  return (
    <MoviesContext.Provider value={{ loading, setLoading, getSearchMovies, setFavorites, favorites, getMovieOrSerieStorage, errorMessage, setErrorMessage, genres, setGenres, setDetails, searchTerm, setSearchTerm, movies, setMovies, topRated, setTopRated, nowPlaying, setNowPlaying, trendingDay, setTrendingDay, series, setSeries, seriesOnTheAir, setSeriesOnTheAir, seriesTopRated, setSeriesTopRated }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;
