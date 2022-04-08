import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home/Home";
import MovieSearch from "./components/Search/ListSearch";
import PageNotFound from "./components/PageNotFound";
import Favorites from "./components/Favorites/Favorites";
import MoviesHome from "./components/Movies/MovieHome";
import SeriesHome from "./components/Series/SeriesHome";

//react=query
import { QueryClient, QueryClientProvider } from 'react-query';
// import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient({});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Router >
        <div className="App">
          <Nav />
          <Switch>
            < Route path="/" exact component={Home} />
            < Route path="/movies" exact component={MoviesHome} />
            < Route path="/series" exact component={SeriesHome} />
            < Route path="/favorites" exact component={Favorites} />
            <Route
              path="/search/:searchInput"
              render={props => (
                <MovieSearch searchTerm={props.match.params.searchInput} />
              )}
            />
            <Route exact={true} component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </QueryClientProvider>
  );
}

export default App;




