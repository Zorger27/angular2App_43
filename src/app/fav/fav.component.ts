import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fav',
  templateUrl: './fav.component.html',
  styleUrls: ['./fav.component.css']
})
export class FavComponent implements OnInit {
  
  @Input() isFav;
  @Output() switchigFav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  switchFav(fav){
    this.isFav = !fav;
    this.switchigFav.emit(this.isFav);
  }


}
