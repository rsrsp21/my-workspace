import { Component } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-no-encapsulation',
  template: `
  <div class="box">
    <h2>None</h2>
    <div class="none-message">No encapsulation: Styles are global.</div>
</div>
  `,
  styles: [
    `
      h2, .none-message { color: red; }
      .box {
        border: 2px solid red;
        padding: 16px;
        margin: 16px;
        border-radius: 8px;
      }
    `,
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NoEncapsulationComponent {}
