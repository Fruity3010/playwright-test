import { useState, type FormEvent } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { isAuthenticated, login } from '../auth'
import './Login.css'

export default function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  if (isAuthenticated()) {
    return <Navigate to="/dashboard" replace />
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    if (!email.trim() || !password) {
      setError('Enter email and password.')
      return
    }
    login()
    navigate('/dashboard', { replace: true })
  }

  return (
    <div className="auth-shell">
      <div className="auth-card">
        <h1 className="auth-title">Sign in</h1>
        <p className="auth-subtitle">Use any email and password for this demo.</p>
        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <label className="auth-label">
            Email
            <input
              className="auth-input"
              type="email"
              name="email"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label className="auth-label">
            Password
            <input
              className="auth-input"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
            />
          </label>
          {error ? <p className="auth-error" role="alert">{error}</p> : null}
          <button type="submit" className="auth-submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  )
}
