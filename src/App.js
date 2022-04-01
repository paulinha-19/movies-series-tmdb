import React, { useContext } from "react";
import {  Route, Switch , BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import MovieSearch from "./components/MovieSearch";
import NotFound from "./components/NotFound";
import MoviePopularDesc from "./components/MoviePopularDesc";
import Favorites from "./components/Favorites";
import AllMoviePopular from "./components/AllMoviePopular";
import Series from "./components/Series";
import Movies from "./components/Movies/MovieCategoryHome";

const App = () => {
  const handleSubmit = (e, history, searchInput) => {
    e.preventDefault();
    let url = `/search/${searchInput}`;
    history.push(url);
  };
  return (
    <Router >
      <div className="App">
        <Route
          render={props => (
            <Header
              // handleSubmit={handleSubmit}
              // history={props.history}
            />
          )}
        />
        <Switch>
          < Route path="/" exact component={AllMoviePopular} />
          < Route path="/movies" exact component={Movies} />
          < Route path="/popular" exact component={MoviePopularDesc} />
          < Route path="/series" exact component={Series} />
          < Route path="/favorites" exact component={Favorites} />
          <Route
            path="/search/:searchInput"
            render={props => (
              <MovieSearch searchTerm={props.match.params.searchInput} />
            )}
          />
          <Route exact={true} component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;




