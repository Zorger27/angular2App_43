import { Component, OnInit } from '@angular/core';
import { UsersService } from '../-services/users.service';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UsersService]
})
export class UsersComponent implements OnInit {
  
  users;
  load = true;
  
  constructor(
    private us: UsersService
  ) { }

  ngOnInit() {
    this.us.getUsers()
      .then(res => {
        this.users = res.json();
        this.load = false;
      })
  }

}
