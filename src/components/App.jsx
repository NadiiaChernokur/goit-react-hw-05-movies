import { Route, Routes } from 'react-router-dom';
// import Movies from 'pages/Movies';
// import TrendList from '../pages/TrendList';
// import FilmDetails from './Film/FilmDetails';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
import NotFoundPage from './NotFoundPage';
import Layout from './Layout/Layout';
import React, { Suspense } from 'react';

const TrendList = React.lazy(() => import('pages/TrendList'));
const Movies = React.lazy(() => import('pages/Movies'));
const FilmDetails = React.lazy(() => import('../pages/FilmDetails'));

export const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
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
    </Suspense>
  );
};
