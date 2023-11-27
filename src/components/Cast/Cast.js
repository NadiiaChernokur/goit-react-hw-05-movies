import { useParams } from 'react-router-dom';
import { getMoviesCredits } from '../Getmovies';
import { useEffect, useState } from 'react';
import CastFilm from './CastFilm';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMoviesCredits(params.movieId);
        setCast(response.data.credits.cast);
      } catch (error) {
        console.error('Помилка отримання даних', error);
      }
    };

    fetchData();
  }, []);
  return (
    <ul>
      <CastFilm cast={cast} />
    </ul>
  );
};

export default Cast;
