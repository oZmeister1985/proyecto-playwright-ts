import { Page } from "@playwright/test";
import { CheckoutOverviewElements } from "./checkoutOverviewElements";

export class CheckoutOverviewMethods{
    private page: Page;
    private checkoutOverviewElements: CheckoutOverviewElements;

    constructor(page: Page) {
        this.page = page;
        this.checkoutOverviewElements = new CheckoutOverviewElements(page);
    }

    async clickFinishButton(){
        await this.checkoutOverviewElements.buttons.finish.click();
    }

    async clickCancelButton(){
        await this.checkoutOverviewElements.buttons.cancel.click();
    }
}