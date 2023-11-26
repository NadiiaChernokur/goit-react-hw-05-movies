import { Link } from 'react-router-dom';

const VisibleArray = ({ array }) => {
  return array.map(film => {
    return (
      <Link to={`/movies/:${film.id}`}>
        <li key={film.id}>{film.title ? film.title : film.name}</li>
      </Link>
    );
  });
};
export default VisibleArray;
