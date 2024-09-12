import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy,
  Input,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Child Component definition
@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `<p>Child Component Loaded. Check the console for logs.</p>`,
  styles: [`
    :host {
      display: block;
      text-align: center;
      padding: 20px;
      border: 2px solid #4a90e2;
      border-radius: 8px;
      background-color: #eaf4fc;
      margin: 10px auto;
      max-width: 400px;
    }

    p {
      font-size: 18px;
      color: #333;
    }
  `]
})
export class ChildComponent implements OnDestroy {
  constructor() {
    console.log('ChildComponent: Constructor');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: ChildComponent is being destroyed');
  }
}

// Main AppComponent
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ChildComponent], // Add ChildComponent here
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  showChildComponent = true;
  @Input() inputData: string = '';

  constructor() {
    console.log('Constructor: AppComponent instantiated');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Initialization logic');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Change detection');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit: Content projection initialization');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked: Content projection checked');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: View initialization');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: View checked');
  }

  toggleChildComponent() {
    this.showChildComponent = !this.showChildComponent;
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Cleanup logic before component destruction');
  }
}


