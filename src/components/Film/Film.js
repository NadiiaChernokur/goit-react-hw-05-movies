import { Link, Outlet } from 'react-router-dom';
import { FilmContainer, FilmMain, Paragraf } from './Film.styled';

const Film = ({ film }) => {
  return (
    <FilmContainer>
      <FilmMain>
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title ? film.title : film.name}
          width={240}
        ></img>
        <div>
          <h1>{film.title ? film.title : film.name}</h1>
          <p>User score: {film.popularity * 100} %</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{film.overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>{film.genres?.map(g => g.name).join(', ')}</p>
        </div>
      </FilmMain>
      <div>
        <p>Additional information</p>
        <Link to="cast">
          <Paragraf>
            <b>Cast</b>
          </Paragraf>
        </Link>
        <Link to="reviews">
          <Paragraf>
            <b>Reviews</b>
          </Paragraf>
        </Link>
      </div>
      <Outlet />
    </FilmContainer>
  );
};

export default Film;
