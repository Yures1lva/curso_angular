import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.scss'
})
export class FirstComponentComponent {
  name = "Yuro"
  age = 24
  car = {
    name: "gol",
    year: 2010
  }
}
