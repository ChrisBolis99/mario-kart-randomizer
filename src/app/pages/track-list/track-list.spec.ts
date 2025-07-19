import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackList } from './track-list';

describe('TrackList', () => {
  let component: TrackList;
  let fixture: ComponentFixture<TrackList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
