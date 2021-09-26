import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import {
  render, screen, within,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from '../app/App';

const setup = (initialPath = '/') => {
  render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
      {/* <Route
        path="*"
        render={
          (props) => {
            history = props.history;
            return null;
          }
        }
      /> */}
    </MemoryRouter>,
  );

  const footer = screen.getByRole('contentinfo');
  return { footer };
};

it('navigates to the home page when logo is clicked', () => {
  setup();

  const logoLinks = screen.getAllByRole('link', { name: /logo\.svg/i });
  userEvent.click(logoLinks[1]);

  // expect(screen.getByText(/home page/i)).toBeInTheDocument();
});

it('it navigates to the emplyers site when link is cliked', () => {
  const { footer } = setup();

  const employerLink = within(footer).getByRole('link', { name: /profy\.dev/i });

  expect(employerLink.getAttribute('href')).toEqual('https://profy.dev/employers');
});

it('', () => {
  setup();

  const termLink = screen.getByRole('link', { name: /Terms & Privacy/i });
  userEvent.click(termLink);

  expect(screen.getByText(/Terms & Privacy/i)).toBeInTheDocument();
});
