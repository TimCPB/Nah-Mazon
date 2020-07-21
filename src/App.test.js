import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});


test('render hello world', () => {
  const { getByText } = render(<App />);
  const text = getByText(/hello world/i);
  expect(text).toBeInTheDocument();
});
