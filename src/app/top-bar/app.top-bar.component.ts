import {Component, Inject, forwardRef, ViewChild, HostListener, ViewContainerRef} from '@angular/core';
import {AppComponent} from '../app.component';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './app.top-bar.component.html',
  styleUrls: ['./app.top-bar.component.css']
})
export class AppTopBarComponent {

  public isPainted = true;

    public cookieTheme = 'DEFAULT';

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
                private location: Location,
                private router: Router
                ) {
    }

    public getLinkHref(value: string): string {
        return '#/' + value;
    }

}
