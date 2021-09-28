import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router';

import App from '../app/App';
import { DEFAULT_SUBREDDIT } from '../config';

const setup = (initialPath = '/') => {
  let history;
  render(

    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      <Route
        path="*"
        render={
          (props) => {
            history = props.history;
            return null;
          }
        }
      />
    </MemoryRouter>,
  );
  return { history };
};

it('shows the form title and a text input prefixed by r /', async () => {
  const { history } = setup('/search/javascript');

  expect(screen.getByRole('heading', { name: /Find the best time for a subreddit/i })).toBeInTheDocument();
  const searchInput = screen.getByLabelText(/r \//i);

  expect(searchInput).toBeInTheDocument();
  expect(searchInput.value).toBe(DEFAULT_SUBREDDIT);

  const submitButon = screen.getByRole('button', { name: /search/i });
  expect(submitButon).toBeInTheDocument();

  userEvent.clear(searchInput);
  userEvent.type(searchInput, 'python');
  expect(searchInput.value).toBe('python');

  userEvent.click(submitButon);
  expect(history.location.pathname).toEqual('/search/python');
});

it('shows a submit button, and updates the usrl when button is clicked', () => {
  const { history } = setup('/search/javascript');

  const header = screen.getByRole('banner');
  const searchLink = within(header).getByRole('link', { name: /search/i });

  const inputEl = screen.getByRole('textbox');
  userEvent.clear(inputEl);
  userEvent.type(inputEl, 'redux');

  userEvent.click(searchLink);
  expect(history.location.pathname).toEqual(`/search/${DEFAULT_SUBREDDIT}`);
});
