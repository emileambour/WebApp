import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}

  title = 'My First Webpage';
  message: string | null = null; // Property to hold the message

  handleClick() {
    console.log('Button clicked!');
    this.message = 'Welcome to my website!';
  }
}
