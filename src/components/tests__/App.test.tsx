import { render, screen } from '@testing-library/react';
import App from '../../App';


 describe('App Component', () => {
  it('renders the main layout correctly', () => {
    render(<App />);
    expect(screen.getByText(/Bienvenido/i)).toBeInTheDocument(); // Cambiar según el texto real en App.tsx
  });
});