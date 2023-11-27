import { Link, useLocation, useParams } from 'react-router-dom';
import { getMoviesId } from '../Getmovies';
import { useEffect, useRef, useState } from 'react';
import Film from './Film';
import { Button } from './FilmDetails.styled';

const FilmDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const location = useLocation();
  // console.log(location.state);
  // const geners = film.genres[0].name;

  const ref = useRef(location.state);
  // console.log(ref);

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
      <Link to={ref.current?.visibleLocation || '/movies'}>
        <Button type="button">On back</Button>
      </Link>
      <Film film={film} />
    </div>
  );
};

export default FilmDetails;
