import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Buyers regret title', () => {
  render(<App />);
  const textElement = screen.getByText("Buyer's regret");
  expect(textElement).toBeInTheDocument();
});
