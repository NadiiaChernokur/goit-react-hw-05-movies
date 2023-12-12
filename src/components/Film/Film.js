import { Link, Outlet } from 'react-router-dom';
import { FilmContainer, FilmMain, Paragraf } from './Film.styled';
import { Img } from './FilmDetails.styled';

const Film = ({ film }) => {
  console.log(film);
  const defaultImg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwlxdVwOBOgwB0FAK_obeLbTw9U1A3geRqqh6RPvXrudBjPmwttyFdI9VacYfzx_FO4dE&usqp=CAU';
  return (
    <FilmContainer>
      <FilmMain>
        <Img
          src={
            film.poster_path
              ? `https://image.tmdb.org/t/p/w500${film.poster_path}`
              : defaultImg
          }
          alt={film.title ? film.title : film.name}
          width={240}
        ></Img>
        <div>
          <h1>{film.title ? film.title : film.name}</h1>
          <p>User score: {Math.round(film.vote_average * 10)}%</p>
          <p>
            <b>Overview</b>
          </p>
          <p>{film.overview}</p>
          <p>
            <b>Genres</b>
          </p>
          <p>{film.genres?.map(g => g.name).join(', ')}</p>
          {film.homepage && (
            <a target="_blank" href={film.homepage} rel="noreferrer noopener">
              <p>Watch</p>
            </a>
          )}
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
