import Card from "./common/Card";
import CustomButton from "./common/Button";

const Form = ({ onSearchChange, searchResults, onAddMovieToStorage }) => {
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            placeholder="Entrez le titre d'un film"
            id="search-input"
            onChange={onSearchChange}
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="result">
          {searchResults.slice(0, 12).map((movie) => (
            <Card
              key={movie.id}
              genre_ids={movie.genre_ids}
              genres={movie.genres}
              poster_path={movie.poster_path}
              title={movie.title}
              average={movie.vote_average}
              release_date={movie.release_date}
              overview={movie.overview}
            >
              <CustomButton
                content="Ajouter aux coup de coeur"
                onClick={() => onAddMovieToStorage(movie)}
              />
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Form;
