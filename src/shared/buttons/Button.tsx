import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: 'primary' | 'white' | 'gray-1' | 'gray-2' ;
  size?: 'small' | 'regular' | 'large';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  color = 'primary',
  size = 'base',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'rounded focus:outline-none focus:ring-2 focus:ring-offset-2';
  let variantStyles = '';
  let sizeStyles = '';

  switch (color) {
    case 'primary':
      variantStyles = 'bg-primary text-white';
      break;
    case 'white':
      variantStyles = 'bg-white text-primary border-2 border-primary';
      break;
    case 'gray-1':
      variantStyles = 'bg-gray-300 text-gray-800';
      break;
    case 'gray-2':
      variantStyles = 'bg-gray-800 text-white';
      break;
    default:
      variantStyles = 'bg-primary text-white';
      break;
  }

  switch (size) {
    case 'small':
      sizeStyles = 'w-[123px] h-[36px] px-2 py-1 text-extrasmall';
      break;
    case 'regular':
      sizeStyles = 'w-[164px] h-[44px] px-4 py-2 text-small';
      break;
    case 'large':
      sizeStyles = 'w-[179px] h-[52px] px-6 py-3 text-base';
      break;
    default:
      sizeStyles = 'w-[164px] h-[44px] px-4 py-2 text-small';
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${sizeStyles} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;