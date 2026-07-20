import { Page } from "@playwright/test";
import { CheckoutPageElements } from "./checkoutPageElements";

export class CheckoutPageMethods{
    private page: Page;
    private checkoutPageElements: CheckoutPageElements;

    constructor(page: Page){
        this.page = page;
        this.checkoutPageElements = new CheckoutPageElements(page);
    }

    async insertFirstName(firstName: string){
        await this.checkoutPageElements.textboxes.firstName.fill(firstName);
    }

    async insertLastName(lastname: string){
        await this.checkoutPageElements.textboxes.lastName.fill(lastname);
    }

    async insertZipPostalCode(zipPostalCode: string){
        await this.checkoutPageElements.textboxes.zipPostalCode.fill(zipPostalCode);
    }    

    async clickCancelButton(){
        await this.checkoutPageElements.buttons.cancel.click();
    }

    async clickContinueButton(){
        await this.checkoutPageElements.buttons.continue.click();
    }
}