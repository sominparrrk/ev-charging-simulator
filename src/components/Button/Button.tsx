interface ButtonProps {
  label: string;
  type: 'submit' | 'reset' | 'button';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  label,
  type,
  onClick,
  disabled = false,
  className = '',
}) => {
  return (
    <button
      className={`${className} px-4 py-2 rounded-lg hover:text-white duration-500`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
