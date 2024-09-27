interface NumberInputProps {
  label: string;
  name: string;
  value?: number;
  placeholder?: string;
  min?: number;
  max?: number;
  unit?: string;
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
  unit,
  isError = false,
  onChange,
}) => {
  return (
    <div className='flex flex-col gap-2 justify-between'>
      <label className='text-sm' htmlFor={label}>
        {label}
      </label>
      <div className='flex flex-row gap-2 items-end'>
        <input
          className={`w-max lg:w-4/5 px-4 py-2 rounded-lg border border-gray-300 duration-500 ${
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
        {unit && <label className='text-xs'>{unit}</label>}
      </div>
    </div>
  );
};

export default NumberInput;
