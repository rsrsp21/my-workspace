import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesList2Component } from '../courses-list2/courses-list2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoursesList2Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registeredCourses: any[] = [];

  handleRegistration(course: any) {
    const isCourseRegistered = this.registeredCourses.some(
      registeredCourse => registeredCourse.id === course.id
    );

    if (isCourseRegistered) {
      alert('This course is already registered.');
    } else {
      this.registeredCourses.push(course);
      console.log('Registered courses:', this.registeredCourses);
    }
  }
}

