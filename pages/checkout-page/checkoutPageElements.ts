import { Page } from "@playwright/test";
export class CheckoutPageElements{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

    get textboxes(){
        return{
            firstName: this.page.locator('#first-name'),
            lastName: this.page.locator('#last-name'),
            zipPostalCode: this.page.locator('#postal-code')
        }
    }

    get buttons(){
        return{
            cancel: this.page.locator('#cancel'),
            continue: this.page.locator('#continue')
        }
    }
}