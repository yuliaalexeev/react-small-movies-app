import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage/';
import { MovieDetailsPage } from './pages/MovieDetailsPage/MovieDetailsPage';
import './assets/styles/global.scss';

export function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/movie/:id" render={ props => <MovieDetailsPage { ...props }  /> } />
          <Route path="/" component={ HomePage } />
          <HomePage />
        </Switch> 
      </Router>
    </div>
  );
}

export default App;
