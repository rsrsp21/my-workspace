import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';
import { EmulatedEncapsulationComponent } from '../emulated-encapsulation/emulated-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-shadow-dom-encapsulation',
  template: `
    <div class="box">
      <h2>ShadowDom</h2>
      <div class="shadow-message">Shadow DOM encapsulation: Styles are isolated within the shadow DOM.</div>
      <app-emulated-encapsulation></app-emulated-encapsulation>
      <app-no-encapsulation></app-no-encapsulation>
    </div>
  `,
  styles: [
    `
      h2, .shadow-message { color: blue; }
      .box {
        border: 2px solid blue;
        padding: 16px;
        margin: 16px;
        border-radius: 8px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.ShadowDom,
  imports: [NoEncapsulationComponent, EmulatedEncapsulationComponent],
})
export class ShadowDomEncapsulationComponent {}

