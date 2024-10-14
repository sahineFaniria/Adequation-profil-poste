import React from 'react';
import clsx from 'clsx';

const buttonVariants = {
  default: 'bg-blue-500 text-white hover:bg-blue-400 active:bg-blue-600',
  destructive: 'bg-red-500 text-white hover:bg-red-400 active:bg-red-600',
  outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-100',
  secondary: 'bg-gray-500 text-white hover:bg-gray-400',
  ghost: 'text-blue-500 hover:bg-blue-50',
  link: 'text-blue-500 underline hover:no-underline',
  rafane: 'bg-indigo-600 text-white hover:bg-indigo-700',
  danger: 'bg-red-500 hover:bg-red-400 text-white'
};

const buttonSizes = {
  default: 'h-10 px-4 text-sm',
  sm: 'h-8 px-3 text-xs',
  lg: 'h-12 px-6 text-lg',
  icon: 'h-10 w-10',
};

const Button = React.forwardRef(({ children, variant = 'default', size = 'default', className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={clsx(
        'flex items-center rounded-lg font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 aria-disabled:cursor-not-allowed aria-disabled:opacity-50',
        buttonVariants[variant],
        buttonSizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
