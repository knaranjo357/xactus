import React from 'react';
import { ChevronRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  icon?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  icon = false
}) => {
  const baseStyles = "inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md transition-colors";
  const variants = {
    primary: "text-white bg-[#409ACA] hover:bg-[#3089b9]",
    secondary: "text-gray-600 hover:text-[#409ACA]"
  };

  const content = (
    <>
      {children}
      {icon && <ChevronRight className="ml-2" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]}`}>
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {content}
    </button>
  );
};