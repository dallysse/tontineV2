import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreerComptePage } from './creer-compte.page';

describe('CreerComptePage', () => {
  let component: CreerComptePage;
  let fixture: ComponentFixture<CreerComptePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerComptePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
