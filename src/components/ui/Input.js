import React from 'react';

const Input = ({ 
  label, 
  name, 
  type = 'text', 
  placeholder = '', 
  value, 
  onChange, 
  className = '', 
  error = '', 
  required = false,
  ...props 
}) => {
  // Base styles for the input field
  const baseInputStyle = "w-full px-4 py-2 rounded-soft border focus:outline-none focus:ring-2 transition-all duration-200";
  
  // Normal and error states
  const normalStyle = "border-gray-300 focus:border-pastel-lavender focus:ring-pastel-lavender/30";
  const errorStyle = "border-red-300 focus:border-red-500 focus:ring-red-200";
  
  return (
    <div className={`mb-4 ${className}`}>
      {label && (
        <label htmlFor={name} className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`${baseInputStyle} ${error ? errorStyle : normalStyle}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default Input;
