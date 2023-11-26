import { useState } from 'react';
import { getMovies } from './Getmovies';
import { useEffect } from 'react';
import MapArray from './MapArray';

const TrendList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();

        const trendFilm = response.data.results;

        setData(trendFilm);
      } catch (error) {
        // console.error('Помилка отримання даних', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {data ? (
        <ul>
          <MapArray array={data} />
        </ul>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
};

export default TrendList;
