import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../-services/notes.service';


@Component({
  selector: 'notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css'],
  providers: [NotesService]
})
export class NotesComponent implements OnInit {
  
  constructor(
    private ns: NotesService
  ) {}
  
  // title:string = 'some string';
  // title:number = 5;
  // title:boolean = true;
  // title:string[] = ['string 1', 'string 2'];
  // title:any = 'SOME TYPE';

  notes = this.ns.getNotes();
  color = 'red';
  
  ngOnInit() {

  }

  rmNote(i){
    this.ns.rmNote(i);
  }

  setColor(newColor){
    this.color = newColor;
  }

  addNote(title, body){
    let lastIndex = this.ns.getNotes().length-1;
    let newId = this.notes[lastIndex].id + 1;
    let note:Note = {
      id: newId,
      title: title.value,
      body: body.value,
      fav: false,
      color: this.color
    }
    this.ns.addNote(note);
    title.value = '';
    body.value = '';
  }

  switchFav(i, newFav){
    
    this.ns.switchFav(i, newFav);
  }

  switchColor(i, newColor){
    this.ns.switchColor(i, newColor);
  }

}
