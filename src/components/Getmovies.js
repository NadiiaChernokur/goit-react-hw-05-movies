import axios from 'axios';

// const BASE_URL = 'https://api.themoviedb.org/3/authentication';
const API_Key = 'c05ee9f567bd87945db696ab9482d765';
// ('https://api.themoviedb.org/3/movie/11?api_key=c05ee9f567bd87945db696ab9482d765');
// const options = {
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer c05ee9f567bd87945db696ab9482d765',
//   },
// };

// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer c05ee9f567bd87945db696ab9482d765',
//   },
// };

// fetch('https://api.themoviedb.org/3/authentication', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));

export const getMovies = async () => {
  //   return fetch(
  //     `https://api.themoviedb.org/3/trending/all/day?api_key=${API_Key}`
  //   )
  //     .then(response => response.json())
  //     .then(response => {
  //       return response.results;
  //     });

  //   .catch(err => console.error(err));
  const respons = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_Key}`
  );

  return respons;
};
// export default getMovies();
export const getFilterMovies = async filter => {
  const respons = await axios.get(
    `
    https://api.themoviedb.org/3/search/movie?api_key=${API_Key}&language=en-US&page=1&query=${filter} `
  );

  return respons;
};
