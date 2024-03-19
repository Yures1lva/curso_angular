import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.scss'
})
export class ParentDataComponent implements OnInit{
  @Input() name: string = '';
  @Input() data!:  {email: string, role: string};

  ngOnInit(): void {
    
  }
}
