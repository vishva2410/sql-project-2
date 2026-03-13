"use client";

import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  hoverable = false, 
  className = '', 
  style, 
  ...props 
}) => {
  const baseStyles: React.CSSProperties = {
    padding: '2rem',
    border: '1px solid var(--border-color)',
    backgroundColor: 'var(--bg-color)',
    transition: 'var(--transition)',
    ...style,
  };

  return (
    <div 
      style={baseStyles}
      className={`${className}`}
      onMouseOver={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '4px 4px 0px 0px var(--border-color)';
        }
      }}
      onMouseOut={(e) => {
        if (hoverable) {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children?: React.ReactNode, title: string, subtitle?: string }> = ({ 
  title, subtitle, children 
}) => (
  <div style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{title}</h3>
      {children}
    </div>
    {subtitle && <p style={{ color: 'var(--text-secondary)', marginTop: '0.25rem', fontSize: '0.875rem' }}>{subtitle}</p>}
  </div>
);
