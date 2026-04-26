import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificationCardView } from './specification-card-view';

describe('SpecificationCardView', () => {
  let component: SpecificationCardView;
  let fixture: ComponentFixture<SpecificationCardView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SpecificationCardView],
    }).compileComponents();

    fixture = TestBed.createComponent(SpecificationCardView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
