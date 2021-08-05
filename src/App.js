import React from 'react';
import {
  BrowserRouter as Router, Route, Link, Switch,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
        </ul>
      </nav>

      <Switch>
        <Route path="/search"><Search /></Route>
        <Route path="/"><Home /></Route>
      </Switch>
      <div />
    </Router>
  );
}

function Home() {
  return (
    <div>Home Page</div>
  );
}

function Search() {
  return (
    <div>Search Page</div>
  );
}

export default App;
