import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsMembrePage } from './details-membre.page';

describe('DetailsMembrePage', () => {
  let component: DetailsMembrePage;
  let fixture: ComponentFixture<DetailsMembrePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMembrePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
