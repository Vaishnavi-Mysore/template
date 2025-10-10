import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const FormPage = lazy(() => import('./pages/FormPage'))
const About = lazy(() => import('./pages/About'))
const Dashboard = lazy(() => import('./pages/Dashboard'))

export default function App() {
  return (
    <BrowserRouter>
      <nav className="nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/">Home</Link>
        <Link to="/form">Form</Link>
        <Link to="/about">About</Link>
      </nav>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}
