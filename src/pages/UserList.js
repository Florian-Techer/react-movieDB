import React, { useEffect, useState } from "react";

import Card from "../components/common/Card";
import CustomButton from "../components/common/Button";
import Header from "../components/Header";

function UserList() {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesCDCLocalStorage = [];

    if (window.localStorage.getItem("moviesCDC")) {
      moviesCDCLocalStorage = JSON.parse(
        window.localStorage.getItem("moviesCDC")
      );
    }

    setListData(moviesCDCLocalStorage);
  }, []);

  const handleDeleteStorage = (movie) => {
    let moviesCDCLocalStorage = [];

    if (window.localStorage.getItem("moviesCDC")) {
      moviesCDCLocalStorage = JSON.parse(
        window.localStorage.getItem("moviesCDC")
      );
    }

    const index = moviesCDCLocalStorage.findIndex(
      (data) => data.id === movie.id
    );

    moviesCDCLocalStorage.splice(index, 1);

    setListData(moviesCDCLocalStorage);
    window.localStorage.setItem(
      "moviesCDC",
      JSON.stringify(moviesCDCLocalStorage)
    );
  };

  return (
    <div className="user-list-page">
      <Header />
      <div className="result">
        {listData.length > 0 ? (
          listData.map((movie) => (
            <Card
              key={movie.id}
              genre_ids={movie.genre_ids}
              genres={movie.genres}
              poster_path={movie.poster_path}
              title={movie.title}
              average={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.release_date}
            >
              <CustomButton
                content="Retirer des favoris"
                onClick={() => handleDeleteStorage(movie)}
              />
            </Card>
          ))
        ) : (
          <h2>Aucun coup de coeur pour le moment</h2>
        )}
      </div>
    </div>
  );
}

export default UserList;
