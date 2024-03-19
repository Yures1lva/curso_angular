import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emitter',
  templateUrl: './emitter.component.html',
  styleUrl: './emitter.component.scss'
})
export class EmitterComponent implements OnInit {
  ngOnInit(): void {
  }

  myNumber: number = 0;

  onChangeNumber() {
    this.myNumber = Math.floor(Math.random() * 10)
  }
}
