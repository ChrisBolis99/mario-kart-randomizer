import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackDisplay } from './track-display';

describe('TrackDisplay', () => {
  let component: TrackDisplay;
  let fixture: ComponentFixture<TrackDisplay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackDisplay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackDisplay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
