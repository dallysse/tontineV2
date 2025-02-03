import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MembresPage } from './membres.page';

describe('MembresPage', () => {
  let component: MembresPage;
  let fixture: ComponentFixture<MembresPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MembresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
