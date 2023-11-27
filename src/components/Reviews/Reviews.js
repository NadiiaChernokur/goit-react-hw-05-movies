import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesReviews } from '../Getmovies';
import ReviewsFilm from './ReviewsFilm';

const Reviews = () => {
  const [rev, setRev] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMoviesReviews(params.movieId);
        setRev(response.data.reviews.results);
      } catch (error) {
        console.error('Помилка отримання даних', error);
      }
    };

    fetchData();
  }, [params.movieId]);
  return (
    <ul>
      {rev.length > 0 ? (
        <ReviewsFilm rev={rev} />
      ) : (
        <div>We don't have any reviews for this movie</div>
      )}
    </ul>
  );
};

export default Reviews;
