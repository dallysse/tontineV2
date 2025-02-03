import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SanctionsPage } from './sanctions.page';

describe('SanctionsPage', () => {
  let component: SanctionsPage;
  let fixture: ComponentFixture<SanctionsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SanctionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
