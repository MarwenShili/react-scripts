import React from 'react'
import { render, screen } from '@testing-library/react'; 
import '@testing-library/jest-dom';
import Progress from './Progress';
describe('Progress component', () => {
  test('renders learn react link', () => {
  render(<Progress />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
  });
});
