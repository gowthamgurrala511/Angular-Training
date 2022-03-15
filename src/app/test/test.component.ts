import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
    Welcome to {{name}} 
    </p>
    <p>
    {{"welcome to :" +name}}
    </p>

    <p>{{name.length}}</p>
    <p>{{name.toUpperCase()}}</p>
  `,
  styles: [
  `p{
    text-align:center;
    font-size:30px;
    color:blue;
  } `


  ]
})
export class TestComponent implements OnInit {
  public name ="Gowtham"

  constructor() { }

  ngOnInit(): void {
  }

}
