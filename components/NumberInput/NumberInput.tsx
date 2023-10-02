import React, { ChangeEvent } from 'react';

export interface NumberInputProps {
  value: number;
  label: string;
  onChange: (value: number) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({
  value,
  onChange,
  label,
}) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(parseInt(e.target.value || '0'));
  };

  return (
    <label>
      <span>{label}</span>

      <input
        className='p-4 w-full text-lg border-2 border-gray-500 rounded'
        type='number'
        value={value}
        onChange={handleChange}
      />
    </label>
  );
};

export default NumberInput;
