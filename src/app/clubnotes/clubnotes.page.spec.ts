import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubnotesPage } from './clubnotes.page';

describe('ClubnotesPage', () => {
  let component: ClubnotesPage;
  let fixture: ComponentFixture<ClubnotesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubnotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
