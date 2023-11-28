import { useState } from 'react';
import { getMovies } from '../components/Getmovies';
import { useEffect } from 'react';
import { Hearts } from 'react-loader-spinner';
import VisibleArray from '../components/Film/VisibleArray';
import { TrendListUl } from 'components/Film/VisibleArray.styled';

const TrendList = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await getMovies();

        const trendFilm = response.data.results;

        setData(trendFilm);
      } catch (error) {
        console.error('Помилка отримання даних', error);
        setError(error);
      }
    };

    fetchData();
    setIsLoading(false);
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      {isLoading && (
        <Hearts
          height="80"
          width="80"
          color="#ea1699"
          ariaLabel="hearts-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      )}
      {data && (
        <TrendListUl>
          <VisibleArray array={data} />
        </TrendListUl>
      )}
      {error && <div> Something went wrong..</div>}
    </div>
  );
};

export default TrendList;
