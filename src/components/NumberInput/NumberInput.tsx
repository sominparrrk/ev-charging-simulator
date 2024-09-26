interface NumberInputProps {
  label: string;
  name: string;
  value?: number;
  placeholder?: string;
  min?: number;
  max?: number;
  isError?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  value,
  placeholder = 'Type here',
  min,
  max,
  isError = false,
  onChange,
}) => {
  return (
    <div className='flex gap-2 items-center'>
      <label className='font-semibold' htmlFor={label}>
        {label}
      </label>
      <input
        className={`px-4 py-2 font-semibold rounded-lg border border-gray-300 duration-500 ${
          isError ? 'focus:border-rose-800' : 'focus:border-green-600'
        }`}
        id={label}
        name={name}
        type='text'
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        pattern='[0-9]*'
        onChange={onChange}
      />
    </div>
  );
};

export default NumberInput;
