import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngularJS Exercise-6';

  ngAfterViewInit() {
    this.initTypewriter();
  }

  initTypewriter() {
    const typewriterElement = document.getElementById('typewriter')!;
    const texts = ['AngularJS!', 'Presentation!', 'Group-6 Demo!'];
    let index = 0;
    let currentText = '';
    let letterIndex = 0;
    let typingSpeed = 100;
    let erasingSpeed = 50;
    let pauseTime = 1500;

    function type() {
      if (letterIndex < texts[index].length) {
        currentText += texts[index].charAt(letterIndex);
        typewriterElement.innerText = currentText;
        letterIndex++;
        setTimeout(type, typingSpeed);
      } else {
        setTimeout(() => {
          erase();
        }, pauseTime);
      }
    }

    function erase() {
      if (letterIndex > 0) {
        currentText = currentText.slice(0, -1);
        typewriterElement.innerText = currentText;
        letterIndex--;
        setTimeout(erase, erasingSpeed);
      } else {
        index = (index + 1) % texts.length;
        setTimeout(type, typingSpeed);
      }
    }

    type();
  }
}
