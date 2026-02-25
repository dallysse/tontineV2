import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReglesPage } from './regles.page';

describe('ReglesPage', () => {
  let component: ReglesPage;
  let fixture: ComponentFixture<ReglesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
