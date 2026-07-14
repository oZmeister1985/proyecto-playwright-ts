import { test } from '@playwright/test';
import { LoginPageMethods } from '../pages/login-page/loginPageMethods';
import { CommonPageMethods } from '../pages/common-page/commonPageMethods';
import { LoginPageData } from '../pages/login-page/loginPageData';
import { ProductsPageMethods } from '../pages/products-page/productsPageMethods';
import { CartPageMethods } from '../pages/cart-page/cartPageMethods';

const userCredentials = LoginPageData.credentials;

test('login', async ({ page }) => {
    const commonPageMethods = new CommonPageMethods(page);
    const loginPageMethods = new LoginPageMethods(page);
    const productsPageMethods = new ProductsPageMethods(page);
    const cartPageMethods = new CartPageMethods(page);

    await commonPageMethods.navigateToTheApplication();
    await loginPageMethods.insertUsername(userCredentials.usernames.standard_user);
    await loginPageMethods.insertPassword(userCredentials.password);
    await loginPageMethods.clickLoginButton();
    await productsPageMethods.clickAddToCartBackpack();
    await productsPageMethods.clickAddToCartOnesie();
    await productsPageMethods.clickOnCartIcon();
    await cartPageMethods.clickContinueShoopingButton();
    await page.pause();
});