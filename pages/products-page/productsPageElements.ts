import {Page} from '@playwright/test'
export class ProductsPageElements{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get icons(){
        return{
          cart: this.page.locator('#shopping_cart_container'),
          twitterIcon: this.page.locator('.social_twitter'),
          facebookIcon: this.page.locator('.social_facebook'),
          linkedinIcon: this.page.locator('.social_linkedin')
        }
    }

    get buttons(){
        return{
          addToCartOnesie: this.page.locator('#add-to-cart-sauce-labs-onesie'),
          addToCartBackpack: this.page.locator('#add-to-cart-sauce-labs-backpack')
        }
    }
    }