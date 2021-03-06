import {Component, Inject, forwardRef, OnDestroy} from '@angular/core';
import {AppComponent} from '../app.component';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {Subscription} from 'rxjs';

@Component({
    selector: 'app-top-menu',
    templateUrl: './app.top-menu.component.html',
    styleUrls: ['./app.top-menu.component.css']
})
export class AppTopMenuComponent implements OnDestroy {

    public selectedType: string;

    private routerEventsSubscription: Subscription;

    constructor(@Inject(forwardRef(() => AppComponent)) public app: AppComponent,
                private location: Location,
                private router: Router
                ) {        
        this.onRouteEvent();
        this.routerEventsSubscription = this.router.events.subscribe((val) => {
            this.onRouteEvent();
        });
    }

    ngOnDestroy() {
        if (Boolean(this.routerEventsSubscription)) {
            this.routerEventsSubscription.unsubscribe();
        }
    }

    private onRouteEvent() {
        const parts = this.location.path().split('/');
        const path = parts.length > 1 ? parts[1] : null;
        if (path === null) {
            this.selectedType = 'home';
        } else {
            // If path is not a possible option at the time it is set
            // it is the same as setting selected type to null. Nothing
            // will be selected. However, if path does become an option
            // after it was set it will be highlighted. This mirrors
            // the expected behavior we want.
            this.selectedType = path;
        }
    }
}
