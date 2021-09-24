import React from 'react';
import { MemoryRouter, Route } from 'react-router';
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

it('subreddit link is in the document', async () => {
  setup();

  const defauktSubReddit = screen.getByText(/r\/javascript/i);
  expect(defauktSubReddit).toBeInTheDocument();
});

it('show a title and a subtitle', () => {
  setup();

  const heading = screen.getByText(/No reactions to your reddit posts?/i);
  expect(heading).toBeVisible();

  const subHeading = screen.getByText(/Great timing, great results. Find the best time to post your subreddit/i);
  expect(subHeading).toBeVisible();
});

it('shows CTA button link is in the document and clicking navigates to "/search/javascript"', async () => {
  const { history } = setup();

  const ctaBtn = screen.getByRole('link', { name: /Show me the best time/i });
  expect(ctaBtn).toBeInTheDocument();

  userEvent.click(ctaBtn);
  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});

it('shows heatmap image is in the document and clicking navigates to "/search/javascript"', () => {
  const { history } = setup();

  const heatmapImage = screen.getByAltText(/heatmap screenshot/i);
  expect(heatmapImage).toBeInTheDocument();

  userEvent.click(heatmapImage);
  expect(screen.getByText(/search page/i)).toBeInTheDocument();
  expect(history.location.pathname).toEqual('/search/javascript');
});
