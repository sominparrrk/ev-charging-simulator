import { render, screen } from '@testing-library/react';
import ErrorMessage from './ErrorMessage';

describe('ErrorMessage', () => {
  it('should render error message', () => {
    const errorText = 'This is an error message';

    render(<ErrorMessage>{errorText}</ErrorMessage>);

    expect(screen.getByText(errorText)).toBeInTheDocument();
  });
});
