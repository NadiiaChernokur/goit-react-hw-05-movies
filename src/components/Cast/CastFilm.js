const CastFilm = ({ cast }) => {
  return cast.map(man => (
    <li key={man.id}>
      <img
        src={`https://image.tmdb.org/t/p/w500${man.profile_path}`}
        alt={man.name}
        width={150}
      />
      <p>{man.name}</p>
      <p>Character: {man.character}</p>
    </li>
  ));
};
export default CastFilm;
