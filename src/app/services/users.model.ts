import { Injectable } from "@angular/core";
import { UsersService } from "./users.service";

@Injectable()
export class UsersModel {
  users = [];
  constructor(private usersService: UsersService) {
    this.initializeUsers();
  }

  initializeUsers() {
    this.usersService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  getUserById(id){
    for(let user of this.users){
      if(user.id == id){  
          return user;
      }
    }
  }
}
