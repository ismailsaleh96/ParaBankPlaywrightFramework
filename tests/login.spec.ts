import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

test('Login with valid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await page.goto('https://parabank.parasoft.com');
  await loginPage.userLogin('testuser', 'testpassword');

  // Validate successful login (placeholder selector)
  await expect(page.locator('text=Accounts Overview')).toBeVisible();
});