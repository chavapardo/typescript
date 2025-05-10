import { render, screen } from '@testing-library/react';
import Header from '../Header'; // Importa el componente Header

describe('Header Component', () => {
  it('renders all navigation links', () => {
    // Renderiza el componente Header
    render(<Header />);

    // Verifica que los enlaces de navegación existan en el DOM
    expect(screen.getByText('Inicio')).toBeInTheDocument();
    expect(screen.getByText('Historia')).toBeInTheDocument();
    expect(screen.getByText('Cultura')).toBeInTheDocument();
    expect(screen.getByText('Geografía')).toBeInTheDocument();
    expect(screen.getByText('Curiosidades')).toBeInTheDocument();
  });
});