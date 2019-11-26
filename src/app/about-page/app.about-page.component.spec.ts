import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAboutPageComponent } from './app.about-page.component';

describe('AboutPageComponent', () => {
  let component: AppAboutPageComponent;
  let fixture: ComponentFixture<AppAboutPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppAboutPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAboutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
