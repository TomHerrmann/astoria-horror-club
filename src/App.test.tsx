import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  beforeEach(() => render(<App />));
  afterEach(cleanup);

  it('should renders the seach input', () => {
    expect(
      screen.getAllByPlaceholderText('Suggest a movie')
    ).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    expect(screen.getByTestId('app')).toMatchSnapshot();
  });
});
