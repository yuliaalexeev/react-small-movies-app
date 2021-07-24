import React, { useState, useEffect } from 'react';
import { movieService } from '../../services/movieService';
import { MovieList } from '../../cmps/MovieList/MovieList';
import { ToggleFavoriteBtn } from '../../cmps/ToggleFavoriteBtn/ToggleFavoriteBtn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import './MovieSearch.scss';

export function MovieSearch(){
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [favorites, setFavorites] = useState([])

  // useEffect(() => {
  //   console.log('text USE EFFECT', text)
  //   const loadMovies = async () => {
  //     const res = await movieService.getMovies(text)
  //     console.log(`res inner cmp`, res)
  //     if(res != undefined){

  //       setMovies(res);
  //     }
      
  //   } 
  //   loadMovies();
  // }, [])
  
  const onChangeHandler = async (text) =>{
    setMessage('')
    setText(text); 
    setLoading(true);
    console.log(`text`, text)
      const res = await movieService.getMovies(text)
      console.log(`res`, res)
      setSuggestions(res);
      console.log(`suggestions`, suggestions)
      // console.log('movies handeler', movies)
      // let matches = [];
      // if(text.length > 0){
      //   matches = movies.filter(acmplt => {
      //     const regex = new RegExp(`${text}`, 'gi');
      //     return acmplt.Title.match(regex);
      //    })
      // }
      // console.log('matches', matches)
      // setSuggestions(matches);
    
  }


  const onSelectedMovieHandler = (text) => {
    setText(text);
    movieService.getMovies(text)
    setSuggestions([]);
  }

  return (  
    <>
      <form className="search"> 
        <label className="search-movie" htmlFor="search-movie">
        <FontAwesomeIcon icon={faSearch} size="sm" />
        <input
          type="text"
          onChange={e => onChangeHandler(e.target.value)}
          value={text}
          placeholder="Type movie name..."
          id="search-movie"
          className="search-movie-input"
        />
        </label>
      </form>
      <ToggleFavoriteBtn />
      {suggestions && <MovieList suggestions={suggestions} />}
      </>
  );
}
