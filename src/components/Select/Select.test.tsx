import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Select from './Select';

describe('Select component', () => {
  const mockOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
  ];
  const mockOnChange = jest.fn();

  it('should render the select component with options', () => {
    render(
      <Select
        label='selectText'
        options={mockOptions}
        value='option1'
        onChange={mockOnChange}
      />
    );

    expect(screen.getByLabelText(/selectText/i)).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('option1');

    mockOptions.forEach((option) => {
      expect(
        screen.getByRole('option', { name: option.label })
      ).toBeInTheDocument();
    });
  });

  it('should render onChange when an option is selected', () => {
    render(
      <Select
        label='selectText'
        options={mockOptions}
        value='option1'
        onChange={mockOnChange}
      />
    );

    const select = screen.getByRole('combobox');
    userEvent.selectOptions(select, 'option2');

    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith('option2');
  });
});
