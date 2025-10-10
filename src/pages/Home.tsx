import React from 'react'
import { Link } from 'react-router-dom'
// Example usage of @aegov/design-system components
import { Button } from '@aegov/design-system'

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <p>This is a Vite + React + TypeScript template with Redux Toolkit and form validation.</p>
      <div style={{ display: 'flex', gap: 8 }}>
        <Link to="/form">
          <Button>Go to form</Button>
        </Link>
        <Link to="/about">
          <Button variant="secondary">About</Button>
        </Link>
      </div>
    </div>
  )
}
