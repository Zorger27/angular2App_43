import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { FavComponent } from './fav/fav.component';
import { HelloComponent } from './hello/hello.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    FavComponent,
    HelloComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HelloComponent
      },
      {
        path: 'notes',
        component: NotesComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
