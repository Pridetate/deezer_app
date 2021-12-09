import { render, screen } from '@testing-library/react';

import Header from '../Header';

describe('Header', () => {
  it('should render same text in the app header', () => {
    render(<Header title='todo' />);
    const h6Element = screen.getByText(/deezer/i);
    expect(h6Element).toBeInTheDocument();
  });
});
