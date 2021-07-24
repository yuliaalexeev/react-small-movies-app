import React, { useState, useEffect } from 'react';
import { movieService } from '../../services/movieService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './MovieDetailsPage.scss';

export function MovieDetailsPage(props) {
  const [movie, setMovie] = useState(null)
  
  useEffect(() => {
    const loadMovie = async () => {
      const res =  await movieService.getSpecificMovie(props.match.params.id)
      setMovie(res);  
    } 
    loadMovie();
  }, [])

  const onBack = () => {
    props.history.goBack()
  }

  // if (!movie) return <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  if (!movie) return <div className="lds-ellipsis">loading...</div>
  return <div className="container movie-details-page">
    <header className="movie-details-page-header">
      <h2>{movie.Title}</h2>
      <button className="clean-btn" onClick={ onBack }><FontAwesomeIcon icon={faChevronRight} size="sm" /></button>
    </header>
    
    <article className="movie-details-page-content">
      <img className="movie-details-page-content-img" src={movie.Poster} alt={movie.Title}/>
      <div className="">
        <h3 className="secondary-title">Details</h3>
        <p>{movie.Released}</p>
        <p>{movie.Runtime}</p>
        <p>{movie.Plot}</p>
        <a href={"https://www.imdb.com/title/"+ movie.imdbID} target="_blank">Link to IMBD</a>
      </div>
    </article>
  </div>
}
