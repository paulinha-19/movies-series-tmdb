import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { SEARCH_API_MOVIE, MOVIES_DESC_POPULAR, MOVIES_NOW_PLAYING, MOVIES_TOP_RATED, MOVIES_TRENDING_DAY, SERIES_TOP_RATED, SERIES_DESC_POPULAR, SERIES_AIRING_TODAY } from "../api/config";

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
  const [movies, setMovies] = useState([]);
  const [trendingDay, setTrendingDay] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [series, setSeries] = useState([]);
  const [seriesOnTheAir, setSeriesOnTheAir] = useState([]);
  const [seriesTopRated, setSeriesTopRated] = useState([]);
  const [search, setSearch] = useState([]);
  const [searchResult, setSearchResult] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true); //false
  const [errorMessage, setErrorMessage] = useState(null);
  const [genres, setGenres] = useState([]);
  const [details, setDetails] = useState("");

  //MOVIES
  const getMoviePopular = async () => {
    const popularResponse = await axios(MOVIES_DESC_POPULAR);
    const data = popularResponse.data.results;
    return data;
  }

  const getMovieNowPlaying = async () => {
    const nowResponse = await axios(MOVIES_NOW_PLAYING);
    const data = (nowResponse.data.results);
    return data;
  }

  const getMovieTrendingDay = async () => {
    const trendingResponse = await axios(MOVIES_TRENDING_DAY);
    const data = (trendingResponse.data.results);
    return data;
  }

  const getMovieTopRated = async () => {
    const topResponse = await axios(MOVIES_TOP_RATED);
    const data = (topResponse.data.results);
    return data;
  }

  //SERIES

  const getSerieTopRated = async () => {
    const serieResponse = await axios(SERIES_TOP_RATED);
    const data = (serieResponse.data.results);
    return data;
  }

  const getSeriePopular = async () => {
    const serieResponse = await axios(SERIES_DESC_POPULAR);
    const data = (serieResponse.data.results);
    return data;
  }

  const getSerieAiringToday = async () => {
    const serieResponse = await axios(SERIES_AIRING_TODAY);
    const data = (serieResponse.data.results);
    return data;
  }

  // const getMovies = async () => {
  //   try {
  //     const moviesResponse = await axios(MOVIES_DESC_POPULAR);
  //     const dataMovie = (moviesResponse.data.results);
  //     setMovies(dataMovie);
  //     setErrorMessage("");
  //   }
  //   catch (error) {
  //     alert(error.message);
  //     setErrorMessage(error.message);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }

  // const getMoviesNowPlaying = async () => {
  //   try {
  //     const moviesResponse = await axios(MOVIES_NOW_PLAYING);
  //     const dataMovie = (moviesResponse.data.results);
  //     setNowPlaying(dataMovie);
  //     setErrorMessage("");
  //   }
  //   catch (error) {
  //     alert(error.message);
  //     setErrorMessage(error.message);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }
  // const getTrendingDay = async () => {
  //   try {
  //     const moviesResponse = await axios(MOVIES_TRENDING_DAY);
  //     const dataMovie = (moviesResponse.data.results);
  //     setTrendingDay(dataMovie);
  //     setErrorMessage("");
  //   }
  //   catch (error) {
  //     alert(error.message);
  //     setErrorMessage(error.message);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }
  // const getMoviesTopRated = async () => {
  //   try {
  //     const moviesResponse = await axios(MOVIES_TOP_RATED);
  //     const dataMovie = (moviesResponse.data.results);
  //     setTopRated(dataMovie);
  //     setErrorMessage("");
  //   }
  //   catch (error) {
  //     alert(error.message);
  //     setErrorMessage(error.message);
  //   }
  //   finally {
  //     setLoading(false);
  //   }
  // }

  const getSearch = async () => {
    try {
      const searchResponse = await axios(`${SEARCH_API_MOVIE}${search}&language=en-US&page=1&include_adult=false`);
      const dataSearch = searchResponse.data.results;
      let titleSearch = `Search Results for `;
      setSearchResult(dataSearch);
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
  // pega o valor do input
  // const handleInputChange = e => {
  //   setSearch(e.target.value);
  //   getSearch();
  // };
  // const handleSubmit = e => {
  //   e.preventDefault();
  //   getSearch();
  //   e.target.reset();
  // };
  // const clearSearch = () => {
  //   setSearch([]);
  //   setSearchResult([]);
  // };
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
  }, []);


  return (
    <MoviesContext.Provider value={{ getMoviePopular, getMovieNowPlaying, getMovieTopRated, getMovieTrendingDay, getSerieTopRated, getSeriePopular, getSerieAiringToday, setFavorites, favorites, getMovieOrSerieStorage, genres, setGenres, setDetails, getSearch, search, setSearch, searchResult, setSearchResult, movies, setMovies, topRated, setTopRated, nowPlaying, setNowPlaying, trendingDay, setTrendingDay, series, setSeries, seriesOnTheAir, setSeriesOnTheAir, seriesTopRated, setSeriesTopRated }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;
