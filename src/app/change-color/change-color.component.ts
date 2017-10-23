import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'change-color',
  templateUrl: './change-color.component.html',
  styleUrls: ['./change-color.component.css']
})
export class ChangeColorComponent implements OnInit {
  
  colors = ['blue', 'red', 'gold'];
  @Input() activeColor;
  @Output() changingColor = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  changeColor(newColor){
    this.activeColor = newColor;
    this.changingColor.emit(this.activeColor);
  }

}
