import { render, screen } from '@testing-library/react';
import Home from '../../pages/Home';


describe('Home Component', () => {
  it('renders the title and paragraph', () => {
    render(<Home />);
    expect(screen.getByText('Bienvenido a México')).toBeInTheDocument();
    expect(screen.getByText(/México es un país lleno de historia/i)).toBeInTheDocument();
  });
});