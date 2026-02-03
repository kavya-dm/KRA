import { ReactNode } from 'react';
import clsx from 'clsx';


// Button variants define visual style
type ButtonVariant = 'primary' | 'outline';


// Button sizes
type ButtonSize = 'sm' | 'lg';


// Button props interface
// Demonstrates configurability via props
interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  icon?: ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
}


// Reusable Button Component
export function Button({
  children,
  variant = 'primary',
  size = 'sm',
  loading = false,
  icon,
  onClick,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={loading}
      className={clsx(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium transition',
        'focus:outline-none focus:ring-2 focus:ring-blue-500',
        {
          // Variant styles
          'bg-blue-600 text-white hover:bg-blue-700':
            variant === 'primary',
          'border border-gray-300 bg-white hover:bg-gray-50':
            variant === 'outline',

          // Size styles
          'px-3 py-1.5 text-sm': size === 'sm',
          'px-6 py-3 text-base': size === 'lg',

          // Disabled/loading
          'opacity-60 cursor-not-allowed': loading,
        }
      )}
    >
      {/* Optional icon */}
      {icon && <span>{icon}</span>}

      {/* Loading state */}
      {loading ? 'Loading...' : children}
    </button>
  );
}
