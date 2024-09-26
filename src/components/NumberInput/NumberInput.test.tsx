import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberInput from './NumberInput';

const mockOnChange = jest.fn();

describe('NumberInput component', () => {
  it('should render label', () => {
    render(
      <NumberInput label='labelText' name='nameText' onChange={mockOnChange} />
    );

    const label = screen.getByLabelText('labelText');
    expect(label).toBeInTheDocument();
  });

  it('should render placeholder if provided', () => {
    render(
      <NumberInput
        label='labelText'
        name='nameText'
        placeholder='placeholderText'
        onChange={mockOnChange}
      />
    );

    const placeholder = screen.getByPlaceholderText('placeholderText');
    expect(placeholder).toBeInTheDocument();
  });

  it('should call onChange when input value changes', () => {
    render(
      <NumberInput label='labelText' name='nameText' onChange={mockOnChange} />
    );

    const input = screen.getByLabelText(/labelText/i);

    userEvent.type(input, '5');
    expect(mockOnChange).toHaveBeenCalled();
  });

  it('should change value correctly when value is typed', () => {
    render(
      <NumberInput label='labelText' name='nameText' onChange={mockOnChange} />
    );

    const input = screen.getByLabelText(/labelText/i);

    userEvent.type(input, '5');
    expect(input).toHaveValue('5');
  });
});
