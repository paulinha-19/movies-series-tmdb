import { MOVIES_ALL_POPULAR } from "../api/config";
import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MoviesContext } from "../context/MoviesContext";
import DefaultPosterPath from "./DefaultPosterPath";
import Loader from "./Loader";
import { v4 as uuidv4 } from 'uuid';
const AllMoviePopular = () => {
  const { loading, setLoading } = useContext(MoviesContext);
  const [moviesAllPopular, setMoviesAllPopular] = useState([]);
  useEffect(() => {
    getMovies(MOVIES_ALL_POPULAR);
  }, []);
  const getMovies = async () => {
    const numberList = Array(10).fill(2).map((v, i) => i + 2);
    const bigData = []
    numberList.map(async (num) => {
      const moviesJson = await axios(MOVIES_ALL_POPULAR + num);
      const res = moviesJson.data.results;
      res.forEach((json) => {
        bigData.push(json)
        if (bigData.length === 200) {
          setMoviesAllPopular(bigData)
        }
      });
    });
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }
  return (
    <div className="  movieList  container d-flex flex-wrap justify-content-center  mt-4">
      {
        loading ? <Loader /> : moviesAllPopular.map((movie) => {
          return (
            <DefaultPosterPath {...movie} key={uuidv4()} />
          )
        }
        )
      }
    </div>
  );
}

export default AllMoviePopular;