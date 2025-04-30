import React from 'react';

const Textarea = ({ ...props }) => {
  return (
    <textarea 
      {...props}
      className="block w-full px-3 py-2 border border-gray-300 rounded-soft shadow-sm focus:outline-none focus:ring-pastel-skyBlue focus:border-pastel-skyBlue sm:text-sm disabled:bg-gray-100 disabled:cursor-not-allowed resize-none"
      rows={props.rows || 4} // Default to 4 rows if not specified
    />
  );
};

export default Textarea;

