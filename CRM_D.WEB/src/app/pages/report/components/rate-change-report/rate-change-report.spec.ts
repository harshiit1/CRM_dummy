import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateChangeReport } from './rate-change-report';

describe('RateChangeReport', () => {
  let component: RateChangeReport;
  let fixture: ComponentFixture<RateChangeReport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RateChangeReport],
    }).compileComponents();

    fixture = TestBed.createComponent(RateChangeReport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
