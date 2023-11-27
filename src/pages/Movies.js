import { useEffect, useState } from 'react';
import { getFilterMovies } from 'components/Getmovies';
import VisibleArray from 'components/Film/VisibleArray';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [allMovies, setAllMovies] = useState([]);
  //   const [submit, setSubmit] = useState(false);

  const [params, setParams] = useSearchParams();
  const filter = params.get('query') ?? '';

  useEffect(() => {
    // if (!submit) {
    //   return;
    // }

    if (allMovies.length > 0) {
      return;
    }
    const fetchData = async () => {
      try {
        const response = await getFilterMovies(filter);
        const trendFilm = response.data.results;
        setAllMovies(trendFilm);
      } catch (error) {
        console.error('Помилка отримання даних', error);
      }
    };

    fetchData();
  }, [allMovies, filter]);

  const toFilterArray = () => {
    // setAllMovies([]);
    // setSubmit(false);

    console.log('bkbkb');
  };

  const visibleArray = e => {
    e.preventDefault();
    const filterValue = e.target[0].value;
    setParams({ query: filterValue });
    // setSubmit(true);
  };

  return (
    <div>
      <form onSubmit={v => visibleArray(v)}>
        <input onChange={toFilterArray}></input>

        <button type="submit">Search</button>
      </form>
      {allMovies.length > 0 && <VisibleArray array={allMovies} />}
    </div>
  );
};
export default Movies;
