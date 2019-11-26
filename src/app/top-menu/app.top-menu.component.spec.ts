import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppTopMenuComponent } from './app.top-menu.component';

describe('TopMenuComponent', () => {
  let component: AppTopMenuComponent;
  let fixture: ComponentFixture<AppTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
