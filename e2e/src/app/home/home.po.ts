import { browser, by, element, ElementFinder, promise } from 'protractor';

export class HomePage {

  navigateTo: () => promise.Promise<any> = () => browser.get('/');

  getCard: () => ElementFinder = () => element(by.id('product'));

  getNavBar: () => ElementFinder = () => element(by.id('navbar'));

  getCart: () => ElementFinder = () => element(by.id('cart'));

  getElementCount(className) {
    return element.all(by.className(className)).count();
  }
}
