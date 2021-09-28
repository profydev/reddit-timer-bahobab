import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';
import Home from '../page-home/HomePage';
import Search from '../page-search/Search';

import { GlobalStyle, theme } from '../style';
import * as S from './App.style';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Normalize />
      <GlobalStyle />
      <Header />
      <S.ContentContainer>
        <Switch>
          <Route path="/search"><Search /></Route>
          <Route path="/"><Home /></Route>
        </Switch>
      </S.ContentContainer>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
