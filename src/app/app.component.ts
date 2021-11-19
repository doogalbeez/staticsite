import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} <br> {{words}}</br></div>`,
})
export class AppComponent {
  value = 'World';
  words = 'This is running on Azure'
}
