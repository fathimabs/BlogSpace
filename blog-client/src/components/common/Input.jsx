import React, { forwardRef } from "react";


const Input = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={`w-full border px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
});

export default Input;
