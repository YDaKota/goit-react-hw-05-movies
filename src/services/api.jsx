import axios from 'axios';

const API_KEY = '162d5fec5ab54c992bcdeaba6afcd1b7';
axios.defaults.baseURL = `https://api.themoviedb.org/3`;

export const getTrending = async () => {
  const { data } = await axios.get(
    `/trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data;
};

export const searchMovies = async query => {
  const { data } = await axios.get(
    `/search/movie?api_key=${API_KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return data;
};

export const getMovieDetails = async id => {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieCredits = async id => {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const getMovieReviews = async id => {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  return data;
};
