import { useState } from 'react';
import { getMovies } from '../components/Getmovies';
import { useEffect } from 'react';

import VisibleArray from '../components/Film/VisibleArray';
import { TrendListUl } from 'components/Film/VisibleArray.styled';

const TrendList = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies();

        const trendFilm = response.data.results;

        setData(trendFilm);
      } catch (error) {
        console.error('Помилка отримання даних', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {data ? (
        <TrendListUl>
          <VisibleArray array={data} />
        </TrendListUl>
      ) : (
        <p>Завантаження...</p>
      )}
    </div>
  );
};

export default TrendList;
