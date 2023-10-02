import React from 'react';

export type ButtonType = 'PRIMARY' | 'SECONDARY' | 'DANGER';

export type ButtonSize = 'SMALL' | 'MEDIUM';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  size?: ButtonSize;
  type?: ButtonType;
  customClasses?: string;
  disabled?: boolean;
}

const typeClassMap: { [key in ButtonType]: string } = {
  PRIMARY:
    'border-blue-500 bg-blue-100 dark:bg-blue-500 dark:hover:bg-blue-600 hover:bg-blue-200',
  SECONDARY:
    'border-gray-500 bg-gray-100 dark:bg-gray-500 dark:hover:bg-gray-600 hover:bg-gray-200',
  DANGER:
    'border-red-500 bg-red-100 dark:bg-red-500 dark:hover:bg-red-600 hover:bg-red-200',
};

const typeSizeMap: { [key in ButtonSize]: string } = {
  SMALL: 'px-3 py-2',
  MEDIUM: 'px-4 py-3',
};

const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  type = 'PRIMARY',
  size = 'MEDIUM',
  customClasses = '',
  disabled,
}) => {
  return (
    <button
      disabled={disabled}
      type='button'
      className={`border-2 rounded ${typeClassMap[type]} ${typeSizeMap[size]} ${
        disabled ? 'cursor-not-allowed' : ''
      } ${customClasses}`}
      onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
