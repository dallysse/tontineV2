import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsAssisePage } from './details-assise.page';

describe('DetailsAssisePage', () => {
  let component: DetailsAssisePage;
  let fixture: ComponentFixture<DetailsAssisePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAssisePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
