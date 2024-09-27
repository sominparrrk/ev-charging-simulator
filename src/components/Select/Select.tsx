import React from 'react';

type OptionType = {
  value: string;
  label: string;
};

interface SelectProps {
  label: string;
  options: OptionType[];
  value: string;
  onChange: (value: string) => void;
}

const Select: React.FC<SelectProps> = ({ label, options, value, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className='select-container flex flex-row gap-4 items-center'>
      <label className='select-label' htmlFor={label}>
        {label}
      </label>
      <select
        id={label}
        className='select px-3 py-1 rounded-lg border border-gray-300 focus:border-green-600'
        value={value}
        onChange={handleChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
