import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animal } from '../../Animals';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.scss'
})
export class ItemDetailComponent {
  animal?: Animal 

  constructor( private listService: ListService, private route: ActivatedRoute){
    this.getAnimal()
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get("id"))
    this.listService.getItem(id).subscribe((animal) => (this.animal = animal))
  }
}
