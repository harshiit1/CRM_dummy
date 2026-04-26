import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateChange } from './rate-change';

describe('RateChange', () => {
  let component: RateChange;
  let fixture: ComponentFixture<RateChange>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateChange],
    }).compileComponents();

    fixture = TestBed.createComponent(RateChange);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
