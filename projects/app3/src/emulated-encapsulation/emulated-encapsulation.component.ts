import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { NoEncapsulationComponent } from '../no-encapsulation/no-encapsulation.component';

@Component({
  standalone: true,
  selector: 'app-emulated-encapsulation',
  template: `
  <div class="box">
    <h2>Emulated</h2>
    <div class="emulated-message">Emulated encapsulation: Styles are scoped to this component.</div>
    <app-no-encapsulation></app-no-encapsulation>
</div>
  `,
  styles: [
    `
      h2, .emulated-message { color: green; }
      .box {
        border: 2px solid green;
        padding: 16px;
        margin: 16px;
        border-radius: 8px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
  imports: [NoEncapsulationComponent],
})
export class EmulatedEncapsulationComponent {}
