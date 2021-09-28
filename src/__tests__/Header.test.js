import React from 'react';
import { MemoryRouter, Route } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../app/App';

const setup = (initialPath = '/') => {
  let history;

  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={(props) => {
          history = props.history;
          return null;
        }}
      />
    </MemoryRouter>,
  );
  return { history };
};

it('navigates to home page when logo is clicked', async () => {
  setup('/search/javascript');

  const logoLink = screen.getAllByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLink[0]);

  // expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

it('navigates to search page when search link is clicked', async () => {
  const { history } = setup();

  const searchLink = screen.getByRole('link', { name: /search/i });
  userEvent.click(searchLink);

  // expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

it.each`
  link | hash
  ${'About'} | ${'#about'}
  ${'How it works'} | ${'#how-it-works'}
`('navigates to "$link" when "$link" is clicked', async ({ link, hash }) => {
  const { history } = setup('/seach/javascript');

  const hashLink = screen.getByRole('link', { name: link });
  userEvent.click(hashLink);

  // expect(screen.getByText(/home page/i)).toBeInTheDocument();
  expect(history.location.hash).toEqual(hash);
});
