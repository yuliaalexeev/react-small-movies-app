import axios from 'axios';
const API_KEY = '7c11b80d';

export const movieService = {
  getMovies,
  getSpecificMovie,
}

async function getMovies(searchTerm) {
  try {
    const res = await axios.get(`http://omdbapi.com/?apikey=${API_KEY}&s=${searchTerm}`);
    return res.data.Search;
  } catch (err) {
    console.log('Cannot get movies', err);
  }
}

async function getSpecificMovie(id) {
  try {
    const res = await axios.get(`http://omdbapi.com/?apikey=${API_KEY}&i=${id}`);
    return res.data;
  } catch (err) {
    console.log('Cannot get specific movie', err);
  }
}