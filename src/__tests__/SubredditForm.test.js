import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter, Route } from 'react-router';

import App from '../app/App';

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
  setup('/search/javascript');

  expect(screen.getByRole('heading', { name: /Find the best time for a subreddit/i })).toBeInTheDocument();
  expect(screen.getByLabelText(/r \//i)).toBeInTheDocument();
});

it('shows a submit button, and updates the usrl when button is clicked', () => {
  const { history } = setup('/search/javascript');

  const submitButon = screen.getByRole('button', { name: /search/i });
  expect(submitButon).toBeInTheDocument();

  const inputEl = screen.getByPlaceholderText(/Enter your subreddit/i);
  userEvent.type(inputEl, 'redux');

  userEvent.click(submitButon);
  expect(history.location.pathname).toEqual('/search/redux');
});
