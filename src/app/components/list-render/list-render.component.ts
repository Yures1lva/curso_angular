import { Component } from '@angular/core';
import { Animal } from '../../Animals';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {
  constructor(private listService: ListService){}
  
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

  RemoverAnimal(animal: Animal) {
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }
}
