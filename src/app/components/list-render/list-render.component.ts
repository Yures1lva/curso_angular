import { Component } from '@angular/core';
import { Animal } from '../../Animals';

import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrl: './list-render.component.scss'
})
export class ListRenderComponent {
  constructor(private listService: ListService){
    this.getAnimals()
  }
  
  animalDetails: string= '';

  animals: Animal[] = []

  showAge(animal: Animal){
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} Aaos`
  }

  RemoverAnimal(animal: Animal) {
    console.log('Removendo animal...')
    this.animals = this.listService.remove(this.animals, animal)
  }

  getAnimals(): void {
    this.listService.getAll().subscribe((animals) => (this.animals = animals));
  }

 
}
