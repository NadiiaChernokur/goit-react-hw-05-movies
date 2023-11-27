import { Link, useLocation, useParams } from 'react-router-dom';
import { getMoviesId } from '../Getmovies';
import { useEffect, useRef, useState } from 'react';
import Film from './Film';

const FilmDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const location = useLocation();

  const ref = useRef(location.state);
  console.log(ref);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMoviesId(movieId);

        setFilm(response.data);
      } catch (error) {
        console.error('Помилка отримання даних', error);
      }
    };

    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={ref.current?.visibleLocation ?? '/movies'}>
        <button type="button">On back</button>
      </Link>
      <Film film={film} />
    </div>
  );
};

export default FilmDetails;
