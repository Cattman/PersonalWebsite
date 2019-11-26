import {AfterViewInit,
    Component,
    ElementRef,
    Renderer,
    ViewChild,
    Renderer2} from '@angular/core';
import {Router} from '@angular/router';
import {OnDestroy} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {environment} from '../environments/environment';

enum MenuOrientation {
STATIC,
OVERLAY,
HORIZONTAL
}

declare var jQuery: any;

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy {

    layoutCompact = false;

    layoutMode: MenuOrientation = MenuOrientation.STATIC;

    darkMenu = false;

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

    documentClickListener: any;

    resetMenu: boolean;

    @ViewChild('layoutContainer', {static: false}) layourContainerViewChild: ElementRef;

    @ViewChild('layoutMenuScroller', {static: false}) layoutMenuScrollerViewChild: ElementRef;

    constructor(public renderer: Renderer2,
                private router: Router) {
    }

    ngOnDestroy() {
        if (this.documentClickListener) {
            this.documentClickListener();
        }

        jQuery(this.layoutMenuScroller).nanoScroller({flash: true});
    }
}
