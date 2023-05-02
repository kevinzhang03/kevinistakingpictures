import React from 'react';
import clsx from 'clsx';

interface props {
  password?: boolean;
  name?: string;
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  maxLength?: number;
  readonly?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function InputText({
  password,
  name,
  value,
  placeholder,
  disabled,
  required,
  maxLength,
  readonly,
  onChange,
  className
}: props) {
  return (
    <input
      type={password ? 'password' : 'text'}
      name={name}
      value={value}
      placeholder={placeholder}
      disabled={disabled}
      required={required}
      maxLength={maxLength}
      readOnly={readonly}
      onChange={onChange}
      className={clsx(
        className ? className : 'block w-full',
        'p-2 bg-white border border-antique-200 rounded-sm text-sm select-none',
        'placeholder:italic placeholder:text-antique-500/50',
        'focus:outline-none focus:border-periwinkle-200 focus:ring-1 focus:ring-periwinkle-200',
        'disabled:opacity-50 disabled:bg-slate-100 disabled:placeholder:blur-[1px]',
        'invalid:border-pink-500 invalid:text-pink-600',
        'focus:invalid:border-pink-500 focus:invalid:ring-pink-500',
      )}
    />
  );
}
