import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  xtest('renders Welcome to Not Amazon', () => {
    const { getByText } = render(<App />);
    const text = getByText(/Welcome to Not Amazon/i);
    expect(text).toBeInTheDocument();
  });
});

