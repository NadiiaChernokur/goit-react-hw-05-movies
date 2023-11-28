import { Link, useLocation, useParams } from 'react-router-dom';
import { getMoviesId } from '../components/Getmovies';
import { useEffect, useRef, useState } from 'react';
import Film from '../components/Film/Film';
import { Button } from '../components/Film/FilmDetails.styled';

const FilmDetails = () => {
  const { movieId } = useParams();
  const [film, setFilm] = useState([]);
  const location = useLocation();

  const ref = useRef(location.state);

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
