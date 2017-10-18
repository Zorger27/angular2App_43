import { Component, OnInit } from '@angular/core';
import { UsersService } from '../-services/users.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UsersService]
})
export class UserComponent implements OnInit {
  
  user;
  load = true;
  constructor(
    private us: UsersService,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    
    this.router.paramMap
    .switchMap((params: ParamMap) => this.us.getUser(+params.get('id')))
    .subscribe(res => {
      this.user = res.json();
      this.load = false;
    })

  }

}
