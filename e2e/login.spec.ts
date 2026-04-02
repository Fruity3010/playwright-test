import { expect, test } from '@playwright/test'

test.describe('login → dashboard', () => {
  test('submits credentials and lands on dashboard', async ({ page }) => {
    await page.goto('/login')

    await expect(page.getByRole('heading', { name: 'Sign in' })).toBeVisible()

    await page.getByLabel('Email').fill('e2e@example.com')
    await page.getByLabel('Password').fill('any-password')
    await page.getByRole('button', { name: 'Continue' }).click()

    await expect(page).toHaveURL(/\/dashboard$/)
    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible()
    await expect(page.getByRole('button', { name: 'Log out' })).toBeVisible()
  })

  test('shows validation when fields are empty', async ({ page }) => {
    await page.goto('/login')
    await page.getByRole('button', { name: 'Continue' }).click()
    await expect(page.getByRole('alert')).toHaveText('Enter email and password.')
  })
})
