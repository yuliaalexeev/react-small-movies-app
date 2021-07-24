import React from 'react';
import { Link } from 'react-router-dom';
import './MoviePreview.scss';

export function MoviePreview({ movie }) {
  return (
    <li className="movie-preview">
      <Link to={ `/movie/${movie.imdbID}` }>
        <img className="movie-preview-img" src={movie.Poster} alt={movie.Title}></img>
        <p className="movie-preview-year">{movie.Year}</p>
        <h2 className="movie-preview-title">{movie.Title}</h2>
      </Link>
    </li>
  );
}
