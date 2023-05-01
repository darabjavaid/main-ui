import { Component } from '@angular/core';

import { UserService  } from "../../services/user.service";
import { User } from "../../models/user";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  users: User[] = [];

  constructor(private userService: UserService){}

  ngOnInit(): void{
    this.userService.getusers().subscribe((result) => {
      this.users = result;
    });
  }
}
