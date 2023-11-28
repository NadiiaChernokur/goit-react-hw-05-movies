const CastFilm = ({ cast }) => {
  const defaultImg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO6wtXYbxtd_cZk2pOLpxp0PyJX-QmLQ21hdheXgEryMk4c9oC2PlicdDXTrQ18FJFsyc&usqp=CAU';
  return cast.map(man => (
    <li key={man.id}>
      <img
        src={
          man.profile_path
            ? `https://image.tmdb.org/t/p/w500${man.profile_path}`
            : defaultImg
        }
        alt={man.name}
        width={150}
      />
      <p>{man.name}</p>
      <p>Character: {man.character}</p>
    </li>
  ));
};
export default CastFilm;
