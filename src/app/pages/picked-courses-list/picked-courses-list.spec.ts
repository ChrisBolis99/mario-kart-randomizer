import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickedCoursesList } from './picked-courses-list';

describe('PickedCoursesList', () => {
  let component: PickedCoursesList;
  let fixture: ComponentFixture<PickedCoursesList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickedCoursesList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickedCoursesList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
