import { render, screen } from '@testing-library/react';
import Button from './Button';
import userEvent from '@testing-library/user-event';

const mockOnClick = jest.fn();

describe('Button component', () => {
  it('should render label', () => {
    render(<Button label='labelText' type='button' onClick={mockOnClick} />);

    const labelText = screen.getByText('labelText');
    expect(labelText).toBeInTheDocument();
  });

  it('should call onClick if it is clicked', () => {
    render(<Button label='labelText' type='button' onClick={mockOnClick} />);

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick if it is disabled', () => {
    render(
      <Button
        label='labelText'
        type='button'
        onClick={mockOnClick}
        disabled={true}
      />
    );

    const button = screen.getByRole('button');
    userEvent.click(button);
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
