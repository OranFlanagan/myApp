import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppModePage } from './app-mode.page';

describe('AppModePage', () => {
  let component: AppModePage;
  let fixture: ComponentFixture<AppModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
