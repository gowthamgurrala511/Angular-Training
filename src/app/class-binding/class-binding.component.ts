import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
    <h2>
      class-binding works!
    </h2>
    <h2 > This is  Binding </h2>
    <h2 [class]="mytext"> This is class Binding </h2>
  `,
  styles: [ `
h2{
  text-align:center;
  font-size:30px;  
}.TextColor{
  color: blue;

}.TextStyle{
  font-style: italic;
}


`

  ]
})
export class ClassBindingComponent implements OnInit {

  public mytext="TextColor";

  constructor() { }

  ngOnInit(): void {
  }

}
