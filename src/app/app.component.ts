import {AfterViewInit,
    Component,
    ElementRef,
    Renderer,
    ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from './menu.service';
import {OnDestroy} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

enum MenuOrientation {
STATIC,
OVERLAY,
HORIZONTAL
};

declare var jQuery: any;

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit, OnDestroy {

layoutCompact: boolean = false;

layoutMode: MenuOrientation = MenuOrientation.STATIC;

darkMenu: boolean = false;

profileMode: 'inline';

rotateMenuButton: boolean;

topbarMenuActive: boolean;

overlayMenuActive: boolean;

staticMenuDesktopInactive: boolean;

staticMenuMobileActive: boolean;

layoutContainer: HTMLDivElement;

layoutMenuScroller: HTMLDivElement;

menuClick: boolean;

topbarItemClick: boolean;

activeTopbarItem: any;

documentClickListener: Function;

resetMenu: boolean;

@ViewChild('layoutContainer', {static: false}) layourContainerViewChild: ElementRef;

@ViewChild('layoutMenuScroller', {static: false}) layoutMenuScrollerViewChild: ElementRef;

get displayPage(): string {
    return this.menuService.displayPage;
}

set displayPage(value: string) {
    this.menuService.displayPage = value;
}

get accordionSelector(): any {
    return this.menuService.accordionSelector;
}

set accordionSelector(value: any) {
    this.menuService.accordionSelector = value;
}

constructor(public renderer: Renderer,
            private router: Router,
            private menuService: MenuService,
            private cookieService: CookieService) {
    const theme = this.cookieService.get('theme');
    if (theme !== undefined && theme !== null && theme.trim().toLowerCase() !== '') {
        this.changeTheme(theme);
    }
}

ngAfterViewInit() {
    this.layoutContainer = <HTMLDivElement> this.layourContainerViewChild.nativeElement;
    this.layoutMenuScroller = <HTMLDivElement> this.layoutMenuScrollerViewChild.nativeElement;

    // Hides the horizontal submenus or top menu if outside is clicked.
    this.documentClickListener = this.renderer.listenGlobal('body', 'click', (event) => {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }

        if (!this.menuClick && this.isHorizontal()) {
            this.resetMenu = true;
        }

        this.topbarItemClick = false;
        this.menuClick = false;
    });

    setTimeout(() => {
        jQuery(this.layoutMenuScroller).nanoScroller({flash: true});
    }, 10);
}

toggleSideNavBar(isOpenable, isCloseable) {
    if (this.isDesktop()) {
        if (this.staticMenuDesktopInactive) {
            if (isOpenable) {
                this.onMenuButtonClick(null);
            }
        } else {
            if (isCloseable) {
                this.onMenuButtonClick(null);
            }
        }
    } else {
        if (this.staticMenuMobileActive) {
            if (isCloseable) {
                this.onMenuButtonClick(null);
            }
        } else {
            if (isOpenable) {
                this.onMenuButtonClick(null);
            }
        }
    }
}

onMenuButtonClick(event) {
    this.rotateMenuButton = !this.rotateMenuButton;
    this.topbarMenuActive = false;

    if (this.layoutMode === MenuOrientation.OVERLAY) {
        this.overlayMenuActive = !this.overlayMenuActive;
    } else {
        if (this.isDesktop()) {
            this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
        } else {
            this.staticMenuMobileActive = !this.staticMenuMobileActive;
        }
    }

    if (event !== null) {
        event.preventDefault();
    }
}

onMenuClick($event) {
    this.menuClick = true;
    this.resetMenu = false;

    if (!this.isHorizontal()) {
        setTimeout(() => {
            jQuery(this.layoutMenuScroller).nanoScroller();
        }, 500);
    }
}

onTopMenubarChange(event) {
    this.router.navigateByUrl('/' + event.value.toLowerCase());
    this.displayPage = event.value.toLowerCase();
}

onSideMenubarClick(event) {
    this.router.navigateByUrl('/' + event.toLowerCase());
    this.displayPage = event.toLowerCase();
}

onTopbarMenuButtonClick(event) {
    this.topbarItemClick = true;
    this.topbarMenuActive = !this.topbarMenuActive;

    if (this.overlayMenuActive || this.staticMenuMobileActive) {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    }

    event.preventDefault();
}

onTopbarItemClick(event, item) {
    this.topbarItemClick = true;

    if (this.activeTopbarItem === item) {
        this.activeTopbarItem = null;
    } else {
        this.activeTopbarItem = item;
    }

    event.preventDefault();
}

isTablet() {
    const width = window.innerWidth;
    return width <= 1024 && width > 640;
}

isDesktop() {
    return window.innerWidth > 1024;
}

isMobile() {
    return window.innerWidth <= 640;
}

isOverlay() {
    return this.layoutMode === MenuOrientation.OVERLAY;
}

isHorizontal() {
    return this.layoutMode === MenuOrientation.HORIZONTAL;
}

isSideMenuHidden(): boolean {
    return this.menuService.sidebarSelectItems.length === 0;
}

changeToStaticMenu() {
    this.layoutMode = MenuOrientation.STATIC;
}

changeToOverlayMenu() {
    this.layoutMode = MenuOrientation.OVERLAY;
}

changeToHorizontalMenu() {
    this.layoutMode = MenuOrientation.HORIZONTAL;
}

changeTheme(theme) {
    this.cookieService.set('theme', theme);
    const themeLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('theme-css');
    const layoutLink: HTMLLinkElement = <HTMLLinkElement> document.getElementById('layout-css');
    themeLink.href = './assets/global/theme/theme-' + theme + '-tft.min.css';
    layoutLink.href = environment.themePath + '/layout/css/layout-' + theme + '-tft.min.css';
}

ngOnDestroy() {
    if (this.documentClickListener) {
        this.documentClickListener();
    }

    jQuery(this.layoutMenuScroller).nanoScroller({flash: true});
}

selectSideNavBarTabIndex(tabIndex) {
    const accordionSelectorKeys = Object.keys(this.accordionSelector);
    for (let i = 0; i < accordionSelectorKeys.length; ++i) {
        delete this.accordionSelector[accordionSelectorKeys[i]];
    }
    this.accordionSelector[tabIndex] = true;
}

}
