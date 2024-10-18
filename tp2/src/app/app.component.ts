import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular Property Binding Example';
  //Example1
  isDisabled=true;
  //Example2
  clickCount=0;
  clickMe() {
    this.clickCount++;
  }
  //Example3
  name="hi";
  clearName() {
    this.name="";
  }
  //Example4
  showMe: boolean= false;
  //
}
