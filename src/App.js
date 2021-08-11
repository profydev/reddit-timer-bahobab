import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Normalize />
        <GlobalStyle />
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
    <div>Home Page</div>
  );
}

function Search() {
  return (
    <div>Search Page</div>
  );
}

export default App;
