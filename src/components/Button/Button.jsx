import React from "react";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-3 py-2 bg-gray-200 rounded hover:bg-gray-300 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}