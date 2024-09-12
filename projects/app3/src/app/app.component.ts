import { Component } from '@angular/core';
import { ShadowDomEncapsulationComponent } from '../shadow-dom-encapsulation/shadow-dom-encapsulation.component';
import { EmulatedEncapsulationComponent } from '../emulated-encapsulation/emulated-encapsulation.component';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ShadowDomEncapsulationComponent, EmulatedEncapsulationComponent, NoEncapsulationComponent],
})
export class AppComponent {}


