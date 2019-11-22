import { Injectable } from '@angular/core';
import {SidebarSelectItem} from '../models/sidebar-select-item.model';
import {TopbarSelectItem} from '../models/topbar-menu-item.model';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

    public accordionSelector: any = { '-1': undefined };

    public readonly topMenuBarMenuItems: TopbarSelectItem[] = [];

    public readonly sidebarSelectItems: SidebarSelectItem[] = [];

    public displayPage: string;

    constructor() {
        this.topMenuBarMenuItems = [new TopbarSelectItem('Home', 'home', 'pi pi-fw pi-home'),
                                    new TopbarSelectItem('Projects', 'projects', 'pi pi-fw pi-folder-open'),
                                    new TopbarSelectItem('Contact', 'contact', 'pi pi-fw pi-envelope'),
                                    new TopbarSelectItem('About', 'about', 'pi pi-fw pi-user')];
/*
        this.sidebarSelectItems.push(new SidebarSelectItem('Submenu 1', null, [
            new SidebarSelectItem('Submenu 1.1 (Home)', 'Home', null),
            new SidebarSelectItem('Submenu 1.2 (About)', 'About', null),
            new SidebarSelectItem('Submenu 1.3 (Contact)', 'Contact', null)
        ]));
        this.sidebarSelectItems.push(new SidebarSelectItem('Submenu 2', null, [
            new SidebarSelectItem('Submenu 2.1 (Home)', 'Home', null),
            new SidebarSelectItem('Submenu 2.2 (About)', 'About', null),
            new SidebarSelectItem('Submenu 2.3 (Contact)', 'Contact', null)
        ]));
        this.sidebarSelectItems.push(new SidebarSelectItem('Submenu 3', null, [
            new SidebarSelectItem('Submenu 3.1 (Home)', 'Home', null),
            new SidebarSelectItem('Submenu 3.2 (About)', 'About', null),
            new SidebarSelectItem('Submenu 3.3 (Contact)', 'Contact', null)
        ]));*/
    }

}
