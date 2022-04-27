import React from "react";

export const Card = ({
  genre_ids,
  genres,
  children,
  poster_path,
  title,
  average,
  release_date,
  overview,
}) => {
  const dateFormater = (date) => {
    let [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  const genreFinder = () => {
    let genresArray = [];
    for (let i = 0; i < genre_ids.length; i++) {
      switch (genre_ids[i]) {
        case 28:
          genresArray.push(`Action`);
          break;
        case 12:
          genresArray.push(`Aventure`);
          break;
        case 16:
          genresArray.push(`Animation`);
          break;
        case 35:
          genresArray.push(`Comédie`);
          break;
        case 80:
          genresArray.push(`Policier`);
          break;
        case 99:
          genresArray.push(`Documentaire`);
          break;
        case 18:
          genresArray.push(`Drame`);
          break;
        case 10751:
          genresArray.push(`Famille`);
          break;
        case 14:
          genresArray.push(`Fantasy`);
          break;
        case 36:
          genresArray.push(`Histoire`);
          break;
        case 27:
          genresArray.push(`Horreur`);
          break;
        case 10402:
          genresArray.push(`Musique`);
          break;
        case 9648:
          genresArray.push(`Mystère`);
          break;
        case 10749:
          genresArray.push(`Romance`);
          break;
        case 878:
          genresArray.push(`Science-fiction`);
          break;
        case 10770:
          genresArray.push(`Téléfilm`);
          break;
        case 53:
          genresArray.push(`Thriller`);
          break;
        case 10752:
          genresArray.push(`Guerre`);
          break;
        case 37:
          genresArray.push(`Western`);
          break;
        default:
          break;
      }
    }
    return genresArray.slice(0, 3).map((genre) => <li key={genre}>{genre}</li>);
  };

  return (
    <div className="card">
      <img
        src={
          poster_path
            ? "https://image.tmdb.org/t/p/w500" + poster_path
            : "./img/poster.jpg"
        }
        alt="affiche film"
      />
      <h2>{title}</h2>
      {release_date ? (
        <h5>Sorti le : {dateFormater(release_date)}</h5>
      ) : (
        "No date"
      )}
      <h4>{average}/10</h4>
      <ul>
        {genre_ids
          ? genreFinder()
          : genres.map((genre, index) => (
              <li key={index}>{genre.name}</li>
            ))}
      </ul>
      {overview ? <h3>Synopsis</h3> : ""}
      <p>{overview}</p>
      {children}
    </div>
  );
};

export default Card;
