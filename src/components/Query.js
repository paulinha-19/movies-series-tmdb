import React, { useContext } from "react";
import { useQuery } from "react-query";
import { MoviesContext } from "../context/MoviesContext";

const UseQuery = () => {
    const { getMoviePopular } = useContext(MoviesContext);
    const { data, isLoading, isError, error } = useQuery("users", getMoviePopular);

    return (
        <>
            {isLoading ? (
                <p>Loading...</p>
            ) : isError ? (
                <p>{error.message}</p>
            ) : (
                data.map((user) => <p style={{ color: '#fff' }} key={user.id}>{user.title}</p>)
            )}
        </>
    );
};

export default UseQuery;
