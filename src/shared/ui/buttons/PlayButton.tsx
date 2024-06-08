import React from 'react';
import { FaPlay } from 'react-icons/fa'; // Импортируем иконку "Play" из react-icons

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

const PlayButton: React.FC<ButtonProps> = ({
  onClick,
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'flex items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantStyles = 'bg-primary text-white hover:bg-primary focus:ring-bg-primary';
  const sizeStyles = 'p-5'; // фиксированные размеры

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      <FaPlay />
    </button>
  );
};

export default PlayButton;