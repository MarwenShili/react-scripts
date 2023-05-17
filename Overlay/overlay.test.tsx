import React from 'react'
import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import Overlay from './Overlay';
describe('Overlay component', () => {
  test('renders learn react link', () => {
  render(<Overlay />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  });
});
