import { Component } from '@angular/core';
import { Animal } from '../../Animals';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {
  animalDetails: string= '';

  animals: Animal[] = [
    { name: 'Junin', type: 'dog', age: 5},
    { name: 'Zezu', type: 'cat', age: 3},
    { name: 'Lindu', type: 'cat', age: 4},
    { name: 'Rosa', type: 'Horser', age: 7},
  ]

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} Aaos`
  }

}
