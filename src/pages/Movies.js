import { useEffect, useState } from 'react';
import { getFilterMovies } from 'components/Getmovies';
import VisibleArray from 'components/VisibleArray';
// const v = 'lay';
// console.log(getFilterMovies(v));

const Movies = () => {
  const [filter, setFilter] = useState('');
  const [allMovies, setAllMovies] = useState([]);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (filter === '') {
      return;
    }
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
  }, [allMovies, filter, submit]);

  //   const toFilterArray = value => {
  //     return setFilter(value);
  //   };

  const visibleArray = e => {
    e.preventDefault();
    const filterValue = e.target[0].value;
    setFilter(filterValue);
  };

  return (
    <div>
      <form onSubmit={v => visibleArray(v)}>
        <input
        //   onChange={evt => toFilterArray(evt.target.value)}
        ></input>

        <button type="submit">Search</button>
      </form>
      {allMovies.length > 0 && <VisibleArray array={allMovies} />}
    </div>
  );
};
export default Movies;
