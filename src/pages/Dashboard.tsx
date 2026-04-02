import { useNavigate } from 'react-router-dom'
import { logout } from '../auth'
import './Dashboard.css'

export default function Dashboard() {
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login', { replace: true })
  }

  return (
    <div className="dash">
      <header className="dash-header">
        <span className="dash-brand">Dashboard</span>
        <button type="button" className="dash-logout" onClick={handleLogout}>
          Log out
        </button>
      </header>
      <main className="dash-main">
        <h1 className="dash-heading">Welcome back</h1>
        <p className="dash-lead">
          You are signed in. Replace this area with charts, tables, or widgets.
        </p>
        <div className="dash-grid">
          <article className="dash-tile">
            <h2>Overview</h2>
            <p>Summary metrics go here.</p>
          </article>
          <article className="dash-tile">
            <h2>Activity</h2>
            <p>Recent events or a feed.</p>
          </article>
          <article className="dash-tile dash-tile-wide">
            <h2>Quick actions</h2>
            <p>Shortcuts to common tasks.</p>
          </article>
        </div>
      </main>
    </div>
  )
}
