import React from 'react';

const Button = ({ children, onClick, className = '', variant = 'peach', size = 'md', ...props }) => {
  // Define base styles
  const baseStyle = "px-6 py-2 rounded-soft font-bold shadow-sm hover:shadow-md transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2";

  // Define size variants
  const sizeStyles = {
    sm: 'text-sm px-4 py-1.5',
    md: 'text-base px-6 py-2',
    lg: 'text-lg px-8 py-3',
  };

  // Define color variants based on pastel theme
  const variantStyles = {
    peach: 'bg-pastel-peach text-purple-800 hover:bg-opacity-80 focus:ring-pastel-peach',
    lavender: 'bg-pastel-lavender text-purple-800 hover:bg-opacity-80 focus:ring-pastel-lavender',
    mint: 'bg-pastel-mint text-green-800 hover:bg-opacity-80 focus:ring-pastel-mint',
    skyBlue: 'bg-pastel-skyBlue text-blue-800 hover:bg-opacity-80 focus:ring-pastel-skyBlue',
    pink: 'bg-pastel-pink text-red-800 hover:bg-opacity-80 focus:ring-pastel-pink', // Optional pink
    outline: 'bg-transparent border-2 border-pastel-lavender text-pastel-lavender hover:bg-pastel-lavender/20 focus:ring-pastel-lavender',
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
      {/* Optional: Add subtle sparkle effect on hover/focus? (Could use pseudo-elements or SVG) */}
    </button>
  );
};

export default Button;

