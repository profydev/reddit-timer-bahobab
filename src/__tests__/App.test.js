import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';
import App from '../app/App';

test('renders App', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
});
