import React from 'react';
import { render, screen } from '@testing-library/react';
import { Header } from './index';

test('should renders navbar and logo', () => {
  render(<Header />);
  
  const logo = screen.getByRole('logo')
  const navbar = screen.getByRole('navigation')
  const openAccountButton = screen.getByRole('open-account')
  const signInButton = screen.getByRole('signin')
  const languageButton = screen.getAllByRole('language')

  expect(logo).toBeInTheDocument()
  expect(navbar).toBeInTheDocument()
  expect(openAccountButton).toBeInTheDocument()
  expect(signInButton).toBeInTheDocument()
  expect(languageButton).toBeInTheDocument()
  
  expect(languageButton.length).toBeGreaterThanOrEqual(2)
});
