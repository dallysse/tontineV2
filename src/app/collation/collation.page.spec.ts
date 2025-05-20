import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollationPage } from './collation.page';

describe('CollationPage', () => {
  let component: CollationPage;
  let fixture: ComponentFixture<CollationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CollationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
