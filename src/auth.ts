const AUTH_KEY = 'app_authenticated'

export function isAuthenticated(): boolean {
  return sessionStorage.getItem(AUTH_KEY) === '1'
}

export function login(): void {
  sessionStorage.setItem(AUTH_KEY, '1')
}

export function logout(): void {
  sessionStorage.removeItem(AUTH_KEY)
}
