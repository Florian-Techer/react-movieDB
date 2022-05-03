import * as MovieDBServices from "../services/MovieDB";

import React, { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../services/localStorage";

import Form from "../components/Form";
import Header from "../components/Header";

function Home() {
  const [search, setSearch] = useState("A");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    MovieDBServices.searchMovie(search)
      .then((res) => setSearchResults(res.results))
      .catch((err) => setError(err));
  }, [search]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleAddStorage = (movie) => {
    console.log(movie);
    let moviesCDCLocalStorage = [];

    /* if (getLocalStorage("moviesCDC")) {
      moviesCDCLocalStorage = JSON.parse(getLocalStorage("moviesCDC"));
    } */

    if (window.localStorage.getItem("moviesCDC")) {
      moviesCDCLocalStorage = JSON.parse(
        window.localStorage.getItem("moviesCDC")
      );
    }

    const isAllowToAdd = !moviesCDCLocalStorage.find(
      (data) => data.id === movie.id
    );

    if (isAllowToAdd) {
      moviesCDCLocalStorage.push(movie);
      setLocalStorage("moviesCDC", JSON.stringify(moviesCDCLocalStorage));
    }
    /* if (isAllowToAdd) {
      moviesCDCLocalStorage.push(movie);
      window.localStorage.setItem(
        "moviesCDC",
        JSON.stringify(moviesCDCLocalStorage)
      );
    } */
  };

  return (
    <div>
      <Header />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
      <Form
        onSearchChange={handleSearchChange}
        searchResults={searchResults}
        onAddMovieToStorage={handleAddStorage}
      />
    </div>
  );
}

export default Home;
