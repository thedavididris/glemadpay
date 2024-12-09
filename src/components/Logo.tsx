import React from 'react';

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img 
        src="https://glemad.com/wp-content/uploads/2023/09/Glemad-Logo-1024x245.png" 
        alt="Glemad Logo" 
        className="h-12 w-auto"
      />
      <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
        Welcome to Glemad Pay
      </h2>
    </div>
  );
}
