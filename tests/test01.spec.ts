import { test } from '@playwright/test';
import { LoginPageMethods } from '../pages/login-page/loginPageMethods';
import { CommonPageMethods } from '../pages/common-page/commonPageMethods';
import { LoginPageData } from '../pages/login-page/loginPageData';

const userCredentials = LoginPageData.credentials;

test('login', async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page);

    await commonPageMethods.navigateToTheApplication();
    await loginPageMethods.insertUsername(userCredentials.usernames.standard_user);
    await loginPageMethods.insertPassword(userCredentials.password);
    await loginPageMethods.clickLoginButton()
    await page.pause();
});