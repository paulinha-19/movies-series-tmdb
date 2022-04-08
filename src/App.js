import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import MovieSearch from "./components/Search/ListSearch";
import PageNotFound from "./components/PageNotFound";
import Favorites from "./components/Favorites/Favorites";
import MoviesHome from "./components/Movies/MovieHome";
import SeriesHome from "./components/Series/SeriesHome";

//react=query
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter >
        <div className="App">
          <Nav />
          <Routes>
            < Route path="/" element={<Home />} />
            < Route path="/movies" element={<MoviesHome />} />
            < Route path="/series" element={<SeriesHome />} />
            < Route path="/favorites" element={<Favorites />} />
            {/* <Route
              path="/search/:searchInput"
              render={props => (
                <MovieSearch searchTerm={props.match.params.searchInput} />
              )}
            /> */}
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
    </QueryClientProvider>
  );
}

export default App;




