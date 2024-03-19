import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrl: './change-number.component.scss'
})
export class ChangeNumberComponent implements OnInit {
  ngOnInit(): void {
  }
  
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()

  handleClick() {
    this.changeNumber.emit();  }
}
