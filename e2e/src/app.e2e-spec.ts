import {browser, element, by} from 'protractor';
import {PrimeNgTemplate} from './app.po';
import {MenuService} from '../src/app/services/menu.service.ts';

describe('PrimeNgTemplate App', function() {
    let page: PrimeNgTemplate;
    const clickTimeout = 45000,
          topbarLeftMenuGroupTestParams = ['Home', 'About', 'Contact'],
          menuService = new MenuService(),
          menuServiceSidebarSelectItems = menuService.sidebarSelectItems,
          themes = ['dark', 'light'];

    beforeAll(function () {
        browser.driver.get(browser.baseUrl);
    });

    beforeEach(() => {
        page = new PrimeNgTemplate();
        // Enforce window size before each test to resolve elements not visible on Jenkins runners.
        browser.driver.manage().window().setSize(1920, 1080); // 1280, 1080
    });

    it('should have proper title when page is loaded.', function() {
        // Arrange
        browser.waitForAngular().then(function() {
            // Act, Assert
            expect<any>(browser.getTitle()).toEqual('Task Force Tips');
        });
    });
    // END NAVIGATION
});
