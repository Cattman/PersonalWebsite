import { Component, OnInit, Input, Inject, forwardRef } from '@angular/core';
import {AppComponent} from '../app.component';
import {MenuService} from '../menu.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() reset: boolean;

  activeRowIndicies: any = [ -1, -1 ];

  get sidebarSelectItems(): any {
      return this.menuService.sidebarSelectItems;
  }

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

  constructor(@Inject(forwardRef(() => AppComponent)) public app: AppComponent, public menuService: MenuService) {
  }

  ngOnInit() {
  }

  public setActiveRow = function(i, j) {
      this.activeRowIndicies[0] = i;
      this.activeRowIndicies[1] = j;
  }

  public isAvailable(): boolean {
      return this.sidebarSelectItems.length > 0;
  }
}
