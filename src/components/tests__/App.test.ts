import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  it('renders the Header, Home, and Footer components', () => {
    render(<App />);
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Bienvenido a México')).toBeInTheDocument();
    expect(screen.getByText(/Información sobre México/i)).toBeInTheDocument();
  });
});