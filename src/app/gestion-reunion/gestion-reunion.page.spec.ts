import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GestionReunionPage } from './gestion-reunion.page';

describe('GestionReunionPage', () => {
  let component: GestionReunionPage;
  let fixture: ComponentFixture<GestionReunionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReunionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
