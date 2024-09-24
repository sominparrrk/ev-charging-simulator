import { useState } from 'react';

interface InputProps {
  label: string;
  placeholder?: string;
  onChange: (value: number) => void;
}

const Input: React.FC<InputProps> = ({ label, placeholder = 'Type here', onChange }) => {
  const [inputValue, setInputValue] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    setInputValue(value);
    onChange(value);
  };

  return (
    <div className='flex gap-2 items-center'>
      <label className='font-semibold' htmlFor={label}>
        {label}
      </label>
      <input
        className='px-4 py-2 font-semibold rounded-lg border border-gray-300 focus:border-green-600 duration-500'
        id={label}
        type='number'
        value={inputValue}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
