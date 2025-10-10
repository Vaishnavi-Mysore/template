import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Button } from '@aegov/design-system'

const MetricCard: React.FC<{ value: string | number; label: string }> = ({ value, label }) => (
  <div className="metric-card">
    <div className="metric-value">{value}</div>
    <div className="metric-label">{label}</div>
  </div>
)

export default function Dashboard() {
  return (
    <div className="container dashboard">
      <header className="dashboard-header">
        <div className="logo">IPI Survey Platform</div>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/production">Production</Link>
          <Link to="/history">History</Link>
        </nav>
      </header>

      <h2>Dashboard Overview</h2>

      <div className="metrics">
        <MetricCard value={142} label="Products Registered" />
        <MetricCard value={5} label="Production Locations" />
        <MetricCard value={'Q2 2023'} label="Latest Report" />
      </div>

      <div style={{ marginTop: 12 }}>
        <Link to="/form"><Button>+ Add New Data</Button></Link>
        <Button variant="secondary" style={{ marginLeft: 8 }}>View Full History</Button>
      </div>

      <section className="recent-submissions">
        <h3>Recent Submissions</h3>
        <table className="submissions-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Quarter</th>
              <th>Products</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>15 Jul 2025</td>
              <td>Q2 2025</td>
              <td>8 products</td>
              <td>Approved</td>
            </tr>
            <tr>
              <td>22 Jun 2025</td>
              <td>Q2 2025</td>
              <td>12 products</td>
              <td>Pending</td>
            </tr>
          </tbody>
        </table>
      </section>
        </div>
      )
    }
