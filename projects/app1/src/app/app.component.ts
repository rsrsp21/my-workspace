import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesListComponent } from '../courses-list/courses-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CoursesListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses = [
    {
      id: 1,
      name: 'Angular JS Basics',
      description: 'A comprehensive introduction to Angular JS, covering fundamental concepts, components, directives, data binding, and more. Learn how to build interactive web applications using Angular JS.',
      instructor: 'Quincy Larson',
      duration: 20, // Hours
      level: 'Beginner',
      prerequisites: ['HTML', 'CSS', 'JavaScript'],
      rating: 4.5,
      reviews: [
        {
          user: 'John Doe',
          rating: 5,
          comment: 'Great course for beginners. Easy to follow and well-explained.',
        },
        {
          user: 'Jane Smith',
          rating: 4,
          comment: 'Good course, but could have more practical examples.',
        },
      ],
    },
    {
      id: 2,
      name: 'Advanced Angular JS',
      description: 'Dive deeper into Angular JS and explore advanced topics such as routing, forms, services, and custom directives. Learn best practices for building scalable and maintainable Angular JS applications.',
      instructor: 'Andrei Neagoie',
      duration: 30, // Hours
      level: 'Intermediate',
      prerequisites: ['Angular JS Basics'],
      rating: 4.8,
      reviews: [
        {
          user: 'Alex Lee',
          rating: 5,
          comment: 'Excellent course for intermediate learners. Covers everything you need to know.',
        },
        {
          user: 'Emily Chen',
          rating: 4.5,
          comment: 'Good course, but could be a bit more challenging for experienced developers.',
        },
      ],
    },
    {
      id: 3,
      name: 'Angular with TypeScript',
      description: 'Learn how to leverage TypeScript for building robust and scalable Angular applications. Explore concepts like type safety, interfaces, classes, and modules. Discover the benefits of using TypeScript in Angular development.',
      instructor: 'Harry',
      duration: 25, // Hours
      level: 'Intermediate',
      prerequisites: ['Angular JS Basics', 'TypeScript Basics'],
      rating: 4.7,
      reviews: [
        {
          user: 'David Kim',
          rating: 5,
          comment: 'Great course for learning Angular with TypeScript. Well-structured and informative.',
        },
        {
          user: 'Olivia Taylor',
          rating: 4.5,
          comment: 'Good course, but could have more hands-on projects.',
        },
      ],
    },
    {
      id: 4,
      name: 'Angular Components and Directives',
      description: 'Delve into the core building blocks of Angular applications: components and directives. Learn how to create reusable components, handle events, and implement custom directives to extend Angular\'s functionality.',
      instructor: 'John Smith',
      duration: 15, // Hours
      level: 'Beginner',
      prerequisites: ['Angular JS Basics'],
      rating: 4.6,
      reviews: [
        {
          user: 'Michael Brown',
          rating: 5,
          comment: 'Excellent course for understanding components and directives in Angular.',
        },
        {
          user: 'Sarah Johnson',
          rating: 4.5,
          comment: 'Good course, but could have more examples of real-world use cases.',
        },
      ],
    },
    {
      id: 5,
      name: 'Angular Routing and Navigation',
      description: 'Master the art of routing in Angular applications. Learn how to create different routes, navigate between pages, and manage URL parameters. Explore techniques for building complex routing structures.',
      instructor: 'Jane Doe',
      duration: 10, // Hours
      level: 'Intermediate',
      prerequisites: ['Angular JS Basics'],
      rating: 4.8,
      reviews: [
        {
          user: 'Thomas Miller',
          rating: 5,
          comment: 'Great course for learning Angular routing. Clear and concise explanations.',
        },
        {
          user: 'Emily Davis',
          rating: 4.5,
          comment: 'Good course, but could have more advanced routing scenarios covered.',
        },
      ],
    },
    {
      id: 6,
      name: 'Angular Forms and Validation',
      description: 'Build robust and user-friendly forms in Angular. Learn how to create different types of forms, validate user input, and handle form submission. Explore techniques for building complex forms with custom validation rules.',
      instructor: 'David Lee',
      duration: 20, // Hours
      level: 'Intermediate',
      prerequisites: ['Angular JS Basics'],
      rating: 4.7,
      reviews: [
        {
          user: 'Christopher Jones',
          rating: 5,
          comment: 'Excellent course for learning Angular forms and validation. Practical and informative.',
        },
        {
          user: 'Olivia Wilson',
          rating: 4.5,
          comment: 'Good course, but could have more examples of real-world form scenarios.',
        },
      ],
    },
  ];

  selectedCourse = this.courses[0];

  onCourseChange(event: any) {
    const courseId = +event.target.value;
    this.selectedCourse = this.courses.find(course => course.id === courseId) || this.courses[0];
  }
}

