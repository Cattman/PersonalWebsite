import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppContactPageComponent } from './app.contact-page.component';

describe('ContactPageComponent', () => {
  let component: AppContactPageComponent;
  let fixture: ComponentFixture<AppContactPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppContactPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppContactPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
