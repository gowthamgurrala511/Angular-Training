import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  template: `
    <br> <br>
    <input [id]="courseId" type="text" value="Angular10">
  `,
  styles: [
  ]
})
export class PropertyBindingComponent implements OnInit {

  public courseId="123";
  constructor() { }

  ngOnInit(): void {
  }

}
