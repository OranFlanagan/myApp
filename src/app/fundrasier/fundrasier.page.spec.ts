import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FundrasierPage } from './fundrasier.page';

describe('FundrasierPage', () => {
  let component: FundrasierPage;
  let fixture: ComponentFixture<FundrasierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FundrasierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
