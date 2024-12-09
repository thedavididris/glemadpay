import React from 'react';

export function Logo() {
  return (
    <div className="flex flex-col items-center justify-center">
      <img 
        src="https://raw.githubusercontent.com/stackblitz/stackblitz-webcontainer-docs/main/docs/assets/glemad-logo.png" 
        alt="Glemad Logo" 
        className="h-16 w-auto"
      />
      <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
        Welcome to Glemad Pay
      </h2>
    </div>
  );
}