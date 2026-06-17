import { test } from '@playwright/test';
import { LoginPageMethods } from '../pages/login-page/loginPageMethods';
import { CommonPageMethods } from '../pages/common-page/commonPageMethods';
import { LoginPageData } from '../pages/login-page/loginPageData';
import { ProductsPageMethods } from '../pages/products-page/productsPageMethods';

const userCredentials = LoginPageData.credentials;

test('login', async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page)
    const loginPageMethods = new LoginPageMethods(page);
    const productsPageMethods = new ProductsPageMethods(page);

    await commonPageMethods.navigateToTheApplication();
    await loginPageMethods.insertUsername(userCredentials.usernames.standard_user);
    await loginPageMethods.insertPassword(userCredentials.password);
    await loginPageMethods.clickLoginButton();
    await productsPageMethods.addToCart();
    await page.pause();
});