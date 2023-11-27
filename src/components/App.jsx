import { Route, Routes } from 'react-router-dom';
import Movies from 'pages/Movies';
import TrendList from '../pages/TrendList';
import FilmDetails from './Film/FilmDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from './NotFoundPage';
import Layout from '../pages/Layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TrendList />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<FilmDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};
