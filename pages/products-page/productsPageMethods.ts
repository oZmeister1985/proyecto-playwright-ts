import { Page } from '@playwright/test'
import { ProductsPageElements } from './productsPageElements';

export class ProductsPageMethods{
    private page: Page;
    private productsPageElements: ProductsPageElements;

    constructor(page: Page){
        this.page = page;
        this.productsPageElements = new ProductsPageElements(page);
    }

async clickAddToCartBackpack(){
    await this.productsPageElements.buttons.addToCartBackpack.click();
}

async clickAddToCartOnesie(){
    await this.productsPageElements.buttons.addToCartOnesie.click();
}

async clickOnCartIcon(){
    await this.productsPageElements.icons.cart.click();
}

}
