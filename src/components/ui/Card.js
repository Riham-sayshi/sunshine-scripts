import React from 'react';

const Card = ({ children, className = '', ...props }) => {
  // Base styles for the card: rounded corners, soft shadow, light background
  const baseStyle = "bg-white dark:bg-gray-800 rounded-soft shadow-sm p-4 md:p-6 border border-gray-200 dark:border-gray-700";

  // Optional: Add subtle hover effect (e.g., slightly larger shadow)
  const hoverStyle = "hover:shadow-md transition-shadow duration-200 ease-in-out";

  return (
    <div
      className={`${baseStyle} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

