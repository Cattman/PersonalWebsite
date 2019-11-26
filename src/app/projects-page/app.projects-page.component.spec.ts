import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppProjectsPageComponent } from './app.projects-page.component';

describe('ProjectsPageComponent', () => {
  let component: AppProjectsPageComponent;
  let fixture: ComponentFixture<AppProjectsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppProjectsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppProjectsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
