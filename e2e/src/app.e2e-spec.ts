import {browser, element, by} from 'protractor';
import {PrimeNgTemplate} from './app.po';
import {MenuService} from '../src/app/menu.service';
import {IndexMatcher} from '../node_modules/tft.utils.protractor-extensions/lib/index-matcher';
import {StepInfo} from '../node_modules/tft.utils.protractor-extensions/lib/step-info';
import {ClickOperation} from '../node_modules/tft.utils.protractor-extensions/lib/click-operation';
import {Extensions} from '../node_modules/tft.utils.protractor-extensions/lib/extensions';
import {VisibilityOfOperation} from '../node_modules/tft.utils.protractor-extensions/lib/visibility-of-operation';

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

    // START NAVIGATION
    for (let bi = 0; bi < topbarLeftMenuGroupTestParams.length; ++bi) {
        (function (buttonIndex) {
            const lowerCaseText = topbarLeftMenuGroupTestParams[buttonIndex].toLowerCase();
            it('should navigate to proper url route when ' + lowerCaseText + ' button in topbar left menu group is clicked.', function() {
                // Arrange, Act
                Extensions.traverse(new StepInfo('#topbar-left-scrollable-menu-items-container p-selectbutton .ui-selectbutton .ui-button',
                                                 [new VisibilityOfOperation(clickTimeout),
                                                  new ClickOperation()],
                                                  new IndexMatcher(buttonIndex))).then(function() {
                    // Assert
                    expect<any>(browser.driver.getCurrentUrl()).toEqual(browser.baseUrl + lowerCaseText);
                });
            });
        })(bi);
    };

    for (let pi = 0; pi < menuServiceSidebarSelectItems.length; ++pi) {
        const menuServiceSubSidebarSelectItems = menuServiceSidebarSelectItems[pi].sidebarSelectItems;
        for (let ci = 0; ci < menuServiceSubSidebarSelectItems.length; ++ci) {
            (function (parentIndex, childIndex) {
                const menuServiceSubmenuSubmenu = menuServiceSubSidebarSelectItems[childIndex];
                it('should navigate to proper url route when menu path ' + menuServiceSidebarSelectItems[parentIndex].label + ' ' +
                     menuServiceSubmenuSubmenu.label + ' button in side navigation bar is clicked', function() {
                        // Arrange, Act (step into)
                        Extensions.traverse([new StepInfo('p-accordion .ui-accordion-header',
                                                          [new VisibilityOfOperation(clickTimeout),
                                                           new ClickOperation()],
                                                           new IndexMatcher(parentIndex)),
                                             new StepInfo('#sidebar-accordion-tab-table-' + parentIndex + '-' + childIndex,
                                                          [new VisibilityOfOperation(clickTimeout), new ClickOperation()])
                                            ]).then(function() {
                            // Assert (verify)
                            expect<any>(browser.driver.getCurrentUrl()).toEqual(browser.baseUrl +
                                                                                menuServiceSubmenuSubmenu.value.toLowerCase());
                            }).then(function() {
                                // Teardown -> Deselect Selected Parent Submenu (step out of)
                                Extensions.traverse(new StepInfo('p-accordion .ui-accordion-header',
                                                                 [new VisibilityOfOperation(clickTimeout),
                                                                  new ClickOperation()],
                                                                  new IndexMatcher(parentIndex)));
                    });
                });
            })(pi, ci);
        };
    };

    it('should have proper title when page is loaded.', function() {
        // Arrange
        browser.waitForAngular().then(function() {
            // Act, Assert
            expect<any>(browser.getTitle()).toEqual('Task Force Tips');
        });
    });

    for (let i = 0; i < themes.length; ++i) {
        (function (theme) {
            it('should set ' + theme + ' theme when settings ' + theme + ' theme is clicked', function() {
                // Arrange, Act
                browser.manage().deleteAllCookies().then(function() {
                    browser.waitForAngular().then(function() {
                        Extensions.traverse([new StepInfo('#topbar-right-settings',
                                                          [new VisibilityOfOperation(clickTimeout),
                                                           new ClickOperation()]),
                                             new StepInfo('#topbar-right-settings-' + theme + '-theme',
                                                          [new VisibilityOfOperation(clickTimeout),
                                                           new ClickOperation()])]).then(function() {
                            // Assert
                            const poundPathLength = '/#/'.length;
                            const baseUrlNoPound = browser.baseUrl.substr(browser.baseUrl.length - poundPathLength) === '/#/' ?
                                browser.baseUrl.slice(0, -1 * poundPathLength) : browser.baseUrl;
                            expect<any>(element(by.id('theme-css')).getAttribute('href'))
                                .toEqual(baseUrlNoPound + '/assets/global/theme/theme-' + theme + '-tft.min.css');
                            expect<any>(element(by.id('layout-css')).getAttribute('href'))
                                .toEqual(baseUrlNoPound + '/assets/global/layout/css/layout-' + theme + '-tft.min.css');
                        });
                    });
                });
            });
        })(themes[i]);
    };
    // END NAVIGATION
});
