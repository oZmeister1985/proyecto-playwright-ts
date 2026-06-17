import { Page } from '@playwright/test'
import { ProductsPageElements } from './productsPageElements';

export class ProductsPageMethods{
    private page: Page;
    private productsPage: ProductsPageElements;

    constructor(page: Page){
        this.page = page;
        this.productsPage = new ProductsPageElements(page);
    }

async addToCart(){
    await this.productsPage.buttons.addToCart.click();
}

}
