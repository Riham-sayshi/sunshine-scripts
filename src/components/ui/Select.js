import React from 'react';

const Select = ({ children, ...props }) => {
  return (
    <select 
      {...props}
      className="block w-full px-3 py-2 border border-gray-300 bg-white rounded-soft shadow-sm focus:outline-none focus:ring-pastel-skyBlue focus:border-pastel-skyBlue sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed"
    >
      {children}
    </select>
  );
};

export default Select;

