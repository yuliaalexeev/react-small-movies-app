import React from 'react';
import { MovieSearch } from '../../cmps/MovieSearch/MovieSearch';
import './HomePage.scss';

export default class HomePage extends React.Component {
  render() {
    return (
      <div className="home-page container">
        <h2 className="primary-title">Search movies</h2>
        <MovieSearch />
      </div>
    );
  }
}
