import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MotPasseOublierPage } from './mot-passe-oublier.page';

describe('MotPasseOublierPage', () => {
  let component: MotPasseOublierPage;
  let fixture: ComponentFixture<MotPasseOublierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MotPasseOublierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
