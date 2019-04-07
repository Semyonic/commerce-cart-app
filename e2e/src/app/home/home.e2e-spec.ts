import { HomePage } from './home.po';
import { browser } from 'protractor';


describe('Home page tests', () => {
  let page: HomePage;

  beforeAll(() => {
    page = new HomePage();
    page.navigateTo();
  });

  /*beforeEach(() => {
    page = new HomePage();
    page.navigateTo();
  });*/

  it('should have a title', (done) => {
    expect(browser.getTitle()).toEqual('CommerceApp');
    done();
  });

  it('should have navbar rendered', (done) => {
    expect(page.getNavBar).toBeTruthy();
    done();
  });

  it('should have at least one card item', (done) => {
    page.getElementCount('col-lg-4').then((res) => {
      expect(res).toBeGreaterThanOrEqual(1);
    });
    done();
  });

  it('should have rendered shopping cart', (done) => {
    expect(page.getCart()).toBeTruthy();
    done();
  });
});
