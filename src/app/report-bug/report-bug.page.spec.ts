import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportBugPage } from './report-bug.page';

describe('ReportBugPage', () => {
  let component: ReportBugPage;
  let fixture: ComponentFixture<ReportBugPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportBugPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
