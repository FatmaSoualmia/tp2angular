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
  num: number=0;
  //
  employees=[
    {
      name:"Rahul", email:"rahul@gmail.com", skills:[{skill:'Angular', exp:'2'}, {skill:'Javascript', exp:'7'}, {skill: 'TypeScript', exp:'3'}]
    },
    {
      name:"Sachin", email:"sachin@gmail.com", skills:[{skill:'Angular', exp:'1'}, {skill:'Android', exp:'3'}, {skill: 'React', exp:'2'}]
    },
    {
      name:"Laxmna", email:"laxman@gmail.com", skills:[{skill:'HTML', exp:'2'}, {skill:'CSS', exp:'2'}, {skill: 'Javascript', exp:'1'}]
    }
  ]
}
