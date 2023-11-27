import { useEffect, useState } from 'react';
import { getFilterMovies } from 'components/Getmovies';
import VisibleArray from 'components/Film/VisibleArray';
import { useSearchParams } from 'react-router-dom';
import { Form, List } from 'components/Movies.styled';

const STATUS = {
  IDEL: 'idel',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVD: 'resolved',
};
const { IDEL, PENDING, REJECTED } = STATUS;

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  const [status, setStatus] = useState(IDEL);
  const [result, setResalt] = useState();

  const [params, setParams] = useSearchParams();
  const filter = params.get('query') ?? '';

  useEffect(() => {
    if (status === IDEL) {
      return;
    }

    const fetchData = async () => {
      try {
        const response = await getFilterMovies(result);
        // const rej = response.data.total_results;

        // if (rej === 0) {
        //   setStatus(REJECTED);
        //   return;
        // }
        const trendFilm = response.data.results;
        setAllMovies(trendFilm);
      } catch (error) {
        return;
      }
    };

    fetchData();
    setStatus(IDEL);
  }, [allMovies, filter, result, status]);

  //   const toFilterArray = () => {
  //     // setAllMovies([]);
  //     // setStatus(CHENGE);
  //   };

  const visibleArray = e => {
    e.preventDefault();
    const filterValue = e.target[0].value;
    setParams({ query: filterValue });
    setResalt(filterValue);
    setStatus(PENDING);
  };

  return (
    <div>
      <Form onSubmit={v => visibleArray(v)}>
        <input></input>

        <button type="submit">Search</button>
      </Form>
      {status === PENDING && <div> Завантажуємо</div>}
      {status === REJECTED && <div> По вашому запиту немає фільмів</div>}
      <List>{allMovies.length > 0 && <VisibleArray array={allMovies} />}</List>
    </div>
  );
};
export default Movies;
