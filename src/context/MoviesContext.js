import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import { SEARCH_API_MOVIE, MOVIES_ALL_POPULAR, MOVIES_NOW_PLAYING, MOVIES_TOP_RATED, MOVIES_UPCOMING, SERIES_TOP_RATED, SERIES_ALL_POPULAR, SERIES_AIRING_TODAY, MOVIES_API_DETAILS, SERIES_API_DETAILS, apiKey } from "../api/config";

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
    const popularResponse = await axios(MOVIES_ALL_POPULAR);
    const data = popularResponse.data.results;
    return data;
  }

  const getMovieNowPlaying = async () => {
    const nowResponse = await axios(MOVIES_NOW_PLAYING);
    const data = (nowResponse.data.results);
    return data;
  }

  const getMovieUpcoming = async () => {
    const trendingResponse = await axios(MOVIES_UPCOMING);
    const data = (trendingResponse.data.results);
    return data;
  }

  const getMovieTopRated = async () => {
    const topResponse = await axios(MOVIES_TOP_RATED);
    const data = (topResponse.data.results);
    return data;
  }

  const getMovieDatail = async ({ queryKey }) => {
    const [_key, ID] = queryKey
    const detailResponse = await axios(`${MOVIES_API_DETAILS}${ID}?api_key=${apiKey}&language=en-US`);
    const data = (detailResponse.data.genres);
    return data;
}

  //SERIES

  const getSerieTopRated = async () => {
    const serieResponse = await axios(SERIES_TOP_RATED);
    const data = (serieResponse.data.results);
    return data;
  }

  const getSeriePopular = async () => {
    const serieResponse = await axios(SERIES_ALL_POPULAR);
    const data = (serieResponse.data.results);
    return data;
  }

  const getSerieAiringToday = async () => {
    const serieResponse = await axios(SERIES_AIRING_TODAY);
    const data = (serieResponse.data.results);
    return data;
  }

  const getSerieDatail = async ({ queryKey }) => {
    const [_key, ID] = queryKey
    const detailResponse = await axios(`${SERIES_API_DETAILS}${ID}?api_key=${apiKey}&language=en-US`);
    const data = (detailResponse.data.genres);
    return data;
}

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
    <MoviesContext.Provider value={{ getMovieDatail, getMoviePopular, getMovieNowPlaying, getMovieTopRated, getMovieUpcoming, getSerieDatail, getSerieTopRated, getSeriePopular, getSerieAiringToday, setFavorites, favorites, getMovieOrSerieStorage, genres, setGenres, setDetails, getSearch, search, setSearch, searchResult, setSearchResult, movies, setMovies, topRated, setTopRated, nowPlaying, setNowPlaying, trendingDay, setTrendingDay, series, setSeries, seriesOnTheAir, setSeriesOnTheAir, seriesTopRated, setSeriesTopRated }}>
      {props.children}
    </MoviesContext.Provider>
  );
};
export default MoviesContextProvider;
