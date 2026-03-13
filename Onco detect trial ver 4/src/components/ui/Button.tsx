"use client";

import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  style,
  ...props 
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return {
          backgroundColor: 'var(--accent-color)',
          color: 'var(--bg-color)',
          border: '1px solid var(--accent-color)',
        };
      case 'secondary':
        return {
          backgroundColor: 'var(--bg-color)',
          color: 'var(--text-color)',
          border: '1px solid var(--border-color)',
        };
      case 'outline':
        return {
          backgroundColor: 'transparent',
          color: 'var(--text-color)',
          border: '1px solid var(--text-color)',
        };
      case 'danger':
        return {
          backgroundColor: 'var(--danger-color)',
          color: '#ffffff',
          border: '1px solid var(--danger-color)',
        };
    }
  };

  const getSizeStyles = () => {
    switch (size) {
      case 'sm': return { padding: '0.5rem 1rem', fontSize: '0.875rem' };
      case 'md': return { padding: '0.75rem 1.5rem', fontSize: '1rem' };
      case 'lg': return { padding: '1rem 2rem', fontSize: '1.125rem' };
    }
  };

  const baseStyles: React.CSSProperties = {
    fontWeight: 'bold',
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    cursor: 'pointer',
    transition: 'var(--transition)',
    width: fullWidth ? '100%' : 'auto',
    ...getVariantStyles(),
    ...getSizeStyles(),
    ...style,
  };

  return (
    <button 
      style={baseStyles} 
      className={`hover-effect ${className}`}
      onMouseOver={(e) => {
        if (variant === 'secondary' || variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'var(--text-color)';
          e.currentTarget.style.color = 'var(--bg-color)';
        } else if (variant === 'primary') {
          e.currentTarget.style.opacity = '0.8';
        }
      }}
      onMouseOut={(e) => {
        if (variant === 'secondary') {
          e.currentTarget.style.backgroundColor = 'var(--bg-color)';
          e.currentTarget.style.color = 'var(--text-color)';
        } else if (variant === 'outline') {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'var(--text-color)';
        } else if (variant === 'primary') {
          e.currentTarget.style.opacity = '1';
        }
      }}
      {...props}
    >
      {children}
    </button>
  );
};
