import {Page} from '@playwright/test'
export class ProductsPageElements{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get icons(){
        return{
          cart: this.page.locator('#shopping_cart_container'),
          facebookIcon: this.page.locator('.social_facebook')
        }
    }

    get buttons(){
        return{
            addToCart: this.page.locator('#add-to-cart-sauce-labs-onesie'),
            }
        }
    }
    