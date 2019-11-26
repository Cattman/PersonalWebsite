import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
    selector: 'app-home-page',
    templateUrl: './app.home-page.component.html',
    styleUrls: ['./app.home-page.component.css']
})
export class AppHomePageComponent implements OnInit {

    title = 'the test site';
    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {label: 'New', icon: 'pi pi-fw pi-plus'},
            {label: 'Open', icon: 'pi pi-fw pi-download'},
            {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
        ];
    }

    constructor() { }
}
