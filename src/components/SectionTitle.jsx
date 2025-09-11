import React from 'react';

const SectionTitle = ({ children, className }) => {
  return (
    <div className={`rounded-lg text-white bg-gradient-to-r from-yellow-950 via-yellow-700 to-yellow-950 ${className}`}>
      {children}
    </div>
  );
};

export default SectionTitle;

