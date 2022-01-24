import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navbar } from './index';
 
test('should renders navbar with four links', () => {
  render(<Navbar />);
  
  const links = screen.getAllByRole('navlink')
  expect(links.length).toBeLessThanOrEqual(4)

});
