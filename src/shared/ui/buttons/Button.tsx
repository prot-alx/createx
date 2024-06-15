import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'basic' | 'secondary' | 'dark' | 'white' | 'transparent';
  size?: 'small' | 'regular' | 'large';
  disabled?: boolean;
  className?: string;
};

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'primary',
  size = 'base',
  disabled = false,
  className = '',
}) => {
  const baseStyles = 'rounded focus:outline-none';
  let variantStyles = '';
  let sizeStyles = '';

  switch (type) {
    case 'basic':
      variantStyles = 'bg-primary text-white hover:bg-[#145C5D] active:bg-primary';
      break;
    case 'secondary':
      variantStyles = 'bg-gray-300 text-gray-800 hover:bg-white hover:border-2 hover:border-gray-400 active:bg-gray-400';
      break;
    case 'transparent':
      variantStyles = 'border-[1px] border-primary text-primary hover:bg-gray-200 hover:border-[1px] active:bg-gray-400';
      break;
    case 'dark':
      variantStyles = 'bg-gray-800 text-white hover:bg-white hover:text-gray-800 hover:border-2 hover:border-gray-800 active:bg-gray-900 active:text-white';
      break;
    case 'white':
      variantStyles = 'bg-white text-gray-800 hover:bg-gray-800 hover:text-white hover:border-2 hover:border-white active:border-gray-900 active:text-gray-900 active:bg-white';
      break;
    default:
      variantStyles = 'bg-primary text-white hover:bg-[#145C5D] active:bg-primary';
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