import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_Key = 'c05ee9f567bd87945db696ab9482d765';

export const getMovies = async () => {
  const respons = await axios.get(
    `${BASE_URL}trending/all/day?api_key=${API_Key}`
  );

  return respons;
};

export const getFilterMovies = async filter => {
  const respons = await axios.get(
    ` ${BASE_URL}search/movie?api_key=${API_Key}&language=en-US&page=1&query=${filter} `
  );

  return respons;
};

export const getMoviesId = async id => {
  const respons = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_Key}&language=en-US`
  );

  return respons;
};

export const getMoviesCredits = async id => {
  const respons = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_Key}&language=en-US&append_to_response=credits`
  );

  return respons;
};

export const getMoviesReviews = async id => {
  const respons = await axios.get(
    `${BASE_URL}movie/${id}?api_key=${API_Key}&append_to_response=reviews`
  );

  return respons;
};
