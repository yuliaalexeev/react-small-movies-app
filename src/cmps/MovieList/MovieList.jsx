import React from 'react';
import { MoviePreview } from '../MoviePreview/MoviePreview';
import './MovieList.scss';

export function MovieList({ suggestions }) {
  return (
    <ul className="movie-list clean-list">
      {suggestions.map((suggestion, i) => (
        <MoviePreview movie={suggestion} key={i} />
      ))}
    </ul>
  );
}
