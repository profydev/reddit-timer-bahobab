import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './Header';

import theme from './themes';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
        <Header />

        <Switch>
          <Route path="/search"><Search /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p id="about">About</p>
      <p id="how-it-works">How It Works</p>
    </div>
  );
}

function Search() {
  return (
    <div>Search Page</div>
  );
}

export default App;
