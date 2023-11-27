const ReviewsFilm = ({ rev }) => {
  return rev.map(r => (
    <li key={r.id}>
      <p>Author: {r.author}</p>
      <p> {r.content}</p>
    </li>
  ));
};
export default ReviewsFilm;
