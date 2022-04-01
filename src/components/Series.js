import { SERIES_ALL_POPULAR } from "../api/config";
import React, { useContext, useEffect } from "react";
import axios from "axios";
import { MoviesContext } from "../context/MoviesContext";
import Loader from "./Loader";
import Movie from "./Movie";
const Series = () => {
    const { series, setSeries, loading, setLoading, errorMessage, setErrorMessage } = useContext(MoviesContext);
    useEffect(() => {
        getSeries(SERIES_ALL_POPULAR);
    });
    const getSeries = async (URL_API) => {
        try {
            const seriesResponse = await axios(URL_API);
            const dataSeries = (seriesResponse.data.results);
            setSeries(dataSeries);
            setErrorMessage("");
        }
        catch (error) {
            alert(error.message);
            setErrorMessage(error.message);
        }
        finally {
            setTimeout(() => {
                setLoading(false);
            }, 3000);
        }
    }
    return (
        <>
            {
                <div className="movieList  container d-flex flex-wrap justify-content-center  mt-4" >
                    {
                        loading ? <Loader /> :
                            series.map((serie) => {
                                return (
                                    <Movie {...serie} key={serie.id} />
                                )
                            })
                    }
                </div>
            }
        </>
    );
}


export default Series; 