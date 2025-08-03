import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  isLoading = false,
  className = '',
  ...props
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-code rounded-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-charcoal whitespace-nowrap';
  
  const variantStyles = {
    primary: 'bg-electric-blue text-charcoal hover:bg-opacity-90 focus:ring-electric-blue',
    secondary: 'bg-neon-violet text-white hover:bg-opacity-90 focus:ring-neon-violet',
    outline: 'bg-transparent border border-electric-blue text-electric-blue hover:bg-electric-blue hover:bg-opacity-10 focus:ring-electric-blue',
    ghost: 'bg-transparent text-electric-blue hover:bg-electric-blue hover:bg-opacity-10 focus:ring-electric-blue',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const loadingClasses = isLoading ? 'opacity-70 cursor-not-allowed' : '';
  
  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${loadingClasses} ${className}`}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && (
        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      {icon && !isLoading && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;