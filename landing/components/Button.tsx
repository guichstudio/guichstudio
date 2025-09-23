import { ReactNode } from 'react';
import Image from 'next/image';

interface ButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'black' | 'white';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  icon?: string;
  iconAlt?: string;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  onClick,
  href,
  type = 'button',
  icon,
  iconAlt = 'Icon',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 hover:scale-105';

  const variantClasses = {
    primary: 'bg-black text-white border-4 border-white',
    secondary: 'bg-white text-black border-4 border-neutral-400 ',
    black: 'bg-black text-white border-4 border-white',
    white: 'bg-white text-black border-4 border-neutral-400 ',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm gap-2',
    md: 'px-6 py-2 text-base gap-3',
    lg: 'px-8 py-2 text-lg gap-4',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Image
          src={icon}
          alt={iconAlt}
          width={20}
          height={20}
          className="w-5 h-5 rounded-full object-cover"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
