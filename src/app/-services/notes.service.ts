import { Injectable } from '@angular/core';
import { NOTES } from '../NOTES';
import { Note } from '../note';

@Injectable()
export class NotesService {

  getNotes(){
    return NOTES;
  }

  rmNote(i){
    NOTES.splice(i, 1);
  }

  addNote(note: Note){
    NOTES.push(note);
  }

  switchFav(i, newFav){
    NOTES[i].fav = newFav;
  }

  switchColor(i, newColor){
    NOTES[i].color = newColor;
  }
  
}