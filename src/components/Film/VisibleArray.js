import { Link, useLocation } from 'react-router-dom';

const VisibleArray = ({ array }) => {
  const visibleLocation = useLocation();
  // console.log(visibleLocation);

  return array.map(film => {
    return (
      <Link to={`/movies/${film.id}`} state={{ visibleLocation }}>
        <li key={film.id}>{film.title ? film.title : film.name}</li>
      </Link>
    );
  });
};
export default VisibleArray;
