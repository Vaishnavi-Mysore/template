import React from 'react'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: string }> = ({ children, variant, ...rest }) => (
  <button
    {...rest}
    style={{ padding: '8px 12px', background: variant === 'secondary' ? '#eee' : '#0b5', border: 'none', borderRadius: 4 }}
  >
    {children}
  </button>
)

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => (
  <input
    ref={ref}
    {...props}
    style={{ padding: 8, borderRadius: 4, border: '1px solid #ccc', width: '100%' }}
  />
))

export const Card: React.FC<React.PropsWithChildren<Record<string, unknown>>> = ({ children }) => (
  <div style={{ padding: 16, border: '1px solid #eee', borderRadius: 8, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>{children}</div>
)

export default {
  Button,
  Input,
  Card,
}
