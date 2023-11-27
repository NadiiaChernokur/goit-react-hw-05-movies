import { Link, Outlet } from 'react-router-dom';

const Film = ({ film }) => {
  // console.log(obj);
  // obj.map(v => {
  //   console.log(v.name);
  //   return v;
  // });

  return (
    <div>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
          alt={film.title ? film.title : film.name}
        ></img>
        <div>
          <h1>{film.title ? film.title : film.name}</h1>
          <p>User score {film.popularity}</p>
          <p>Overview</p>
          <p>{film.overview}</p>
          <p>Genres</p>
          <p>bbkbkj</p>
        </div>
      </div>
      <div>
        <p>Additional information</p>
        <Link to="cast">
          <p>Cast</p>
        </Link>
        <Link to="reviews">
          <p>Reviews</p>
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Film;
