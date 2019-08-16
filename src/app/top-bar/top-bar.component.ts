import {Component, Inject, forwardRef, ViewChild, HostListener, ViewContainerRef} from '@angular/core';
import {AppComponent} from '../app.component';
import {SelectItem} from 'primeng/primeng';
import {MenuService} from '../menu.service';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {

  public isPainted: boolean = true;

    public cookieTheme = 'DEFAULT';

    public types: SelectItem[];

    get displayPage(): string {
        return this.menuService.displayPage;
    }

    set displayPage(value: string) {
        this.menuService.displayPage = value;
    }

    /**
     * IE 11 settings paint bug workaround.
     * In IE 11 ONLY (Not Edge or Chrome) part of the top menu does not repaint until
     * the user moves mouse pointer over the element. Removing the element from the DOM
     * completely then adding it again seems to resolve this painting issue.
     * @param event The resize event.
     */
    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (this.isPainted) {
            this.isPainted = false;
            setTimeout(() => {
                this.isPainted = true;
            }, 250);
        }
    }

    constructor(@Inject(forwardRef(() => AppComponent)) public app: AppComponent,
                public menuService: MenuService,
                private location: Location,
                private router: Router
                ) {
        this.types = this.menuService.topMenuBarMenuItems;
        if (this.types.length > 0) {
            if (this.displayPage === undefined) {
                this.displayPage = this.types[0].value;
            }
        }
    }

    public isSidebarAvailable(): boolean {
        return this.menuService.sidebarSelectItems.length > 0;
    }

    public getLinkHref(value: string): string {
        return '#/' + value;
    }

}
