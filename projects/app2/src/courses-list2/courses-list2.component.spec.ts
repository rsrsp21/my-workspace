import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesList2Component } from './courses-list2.component';

describe('CoursesList2Component', () => {
  let component: CoursesList2Component;
  let fixture: ComponentFixture<CoursesList2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesList2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesList2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
