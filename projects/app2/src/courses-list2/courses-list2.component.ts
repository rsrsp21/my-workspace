import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-courses-list2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './courses-list2.component.html',
  styleUrls: ['./courses-list2.component.css']
})
export class CoursesList2Component {
  @Output() register = new EventEmitter<any>();

  courses = [
    { id: 1, name: 'Angular JS Basics',
      instructor: 'Quincy Larson',
      duration: 20, // Hours
      level: 'Beginner',
      prerequisites: ['HTML', 'CSS', 'JavaScript'],
      rating: 4.5},
    { id: 2, name: 'Advanced Angular JS',
      instructor: 'Andrei Neagoie',
      duration: 30, // Hours
      level: 'Intermediate',
      prerequisites: ['Angular JS Basics'],
      rating: 4.8},
    { id: 3, name: 'Angular with TypeScript',
      instructor: 'Harry',
      duration: 25, // Hours
      level: 'Intermediate',
      prerequisites: ['Angular JS Basics', 'TypeScript Basics'],
      rating: 4.7},
      {
        id: 4, name: 'Angular Components and Directives',
        instructor: 'John Smith',
        duration: 15, // Hours
        level: 'Beginner',
        prerequisites: ['Angular JS Basics'],
        rating: 4.6},
        {
          id: 5, name: 'Angular Services and Dependency Injection',
          instructor: 'Jane Doe',
          duration: 20, // Hours
          level: 'Intermediate',
          prerequisites: ['Angular Components and Directives'],
          rating: 4.1},
          
  ];

  onRegister(course: any) {
    this.register.emit(course);
  }
}

