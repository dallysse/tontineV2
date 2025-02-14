import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailSessionPage } from './detail-session.page';

describe('DetailSessionPage', () => {
  let component: DetailSessionPage;
  let fixture: ComponentFixture<DetailSessionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailSessionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
