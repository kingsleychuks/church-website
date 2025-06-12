import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('renders the church website header', () => {
    render(<Header />);
    // Adjust the text below to match your actual header text
    expect(screen.getByText(/church website/i)).toBeInTheDocument();
  });
});