import { render, screen } from '@testing-library/react';
import Footer from '../Footer';

describe('Footer Component', () => {
  it('renders the footer content', () => {
    render(<Footer />);
    expect(
      screen.getByText(/© 2025 Información sobre México | Creado por chavapardo/i)
    ).toBeInTheDocument();
  });
});

