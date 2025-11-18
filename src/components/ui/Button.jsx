import React from "react";
import clsx from "clsx";

export function Button({ 
  children, 
  className = "", 
  variant = "default", 
  size = "default",
  ...props 
}) {
  const base =
    "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none";

  const variants = {
    default: "bg-primary text-white hover:bg-primary/80",
    ghost: "bg-transparent hover:bg-gray-200 text-gray-800",
  };

  const sizes = {
    default: "h-10 px-4 text-sm",
    icon: "h-10 w-10 p-0",
  };

  return (
    <button
      className={clsx(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
