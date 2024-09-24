import { render, screen } from '@testing-library/react';
import Input from './Input';
import userEvent from '@testing-library/user-event';

const mockOnChange = jest.fn();

describe('Input component', () => {
  it('should render label', () => {
    render(<Input label='labelText' onChange={mockOnChange} />);

    const label = screen.getByLabelText('labelText');
    expect(label).toBeInTheDocument();
  });

  it('should render placeholder if provided', () => {
    render(<Input label='labelText' placeholder='placeholderText' onChange={mockOnChange} />);

    const placeholder = screen.getByPlaceholderText('placeholderText');
    expect(placeholder).toBeInTheDocument();
  });

  it('should call onChange when input value changes', () => {
    render(<Input label='labelText' onChange={mockOnChange} />);

    const input = screen.getByLabelText(/labelText/i);

    userEvent.type(input, '5');
    expect(mockOnChange).toHaveBeenCalledWith(5);
  });

  it('should change value correctly when value is typed', () => {
    render(<Input label='labelText' onChange={mockOnChange} />);

    const input = screen.getByLabelText(/labelText/i);

    userEvent.type(input, '5');
    expect(input).toHaveValue(5);
  });
});
