import { expect, Page } from '@playwright/test'
import { CommonPageElements } from './commonPageElements';
export class CommonPageMethods{
    private page: Page;
    private commonPageElements: CommonPageElements;

    constructor(page: Page){
        this.page = page;
        this.commonPageElements = new CommonPageElements(page);
    }

async navigateToTheApplication(){
    await this.page.goto('https://www.saucedemo.com/');
}

async openMenu(){
    await this.commonPageElements.buttons.openMenu.click();
}

async closeMenu(){
    await this.commonPageElements.buttons.closeMenu.click();
}

async clickAllItemsOption(){
    await this.commonPageElements.leftMenu.allItems.click();
}

async clickAboutOption(){
    await this.commonPageElements.leftMenu.about.click();
}

async clickLogoutOption(){
    await this.commonPageElements.leftMenu.logout.click();
}

async clickResetAppStateOption(){
    await this.commonPageElements.leftMenu.resetAppState.click();
}
}