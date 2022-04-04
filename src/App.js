import React, { useContext } from "react";
import {  Route, Switch , BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import MovieSearch from "./components/Search/ListSearch";
import NotFound from "./components/PageNotFound";
import MoviePopularDesc from "./components/Movies/Popular/MoviePopularDesc";
import Favorites from "./components/Favorites/Favorites";
import Series from "./components/Series/Series";
import MoviesHome from "./components/Movies/MovieHome";

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
          < Route path="/" exact component={Home}  />
          < Route path="/movies" exact component={MoviesHome}/>
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




