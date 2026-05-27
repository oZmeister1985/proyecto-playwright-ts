import { test } from '@playwright/test';
import { LoginPage } from '../pages/login-page/loginPage';

test('Login', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.navigateToTheApplication();
  await loginPage.login('standard_user','secret_sauce');
  await loginPage.verifyLoginSuccess();
});