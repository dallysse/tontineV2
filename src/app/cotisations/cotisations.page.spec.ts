import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CotisationsPage } from './cotisations.page';

describe('CotisationsPage', () => {
  let component: CotisationsPage;
  let fixture: ComponentFixture<CotisationsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CotisationsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
