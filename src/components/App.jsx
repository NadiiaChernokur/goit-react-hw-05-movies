import { NavLink, Route, Routes } from 'react-router-dom';
// import getMovies from './Getmovies';
// import Home from 'pages/Home';
import Movies from 'pages/Movies';
import TrendList from './TrendList';

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<TrendList />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<Movies />} />
      </Routes>
    </div>
  );
};
