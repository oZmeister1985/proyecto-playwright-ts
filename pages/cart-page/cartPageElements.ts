import { Page } from "@playwright/test";
export class CartPageElements{
    private page: Page;

    constructor(page: Page){
        this.page = page;
    }

get buttons(){
    return{
        continueShopping: this.page.locator('#continue-shopping'),
        checkout: this.page.locator('#checkout'),
        removeBackpack: this.page.getByTestId('remove-sauce-labs-backpack'),
        removeOnesie: this.page.getByTestId('remove-sauce-labs-onesie')
    }
}
}