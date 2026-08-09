//decorator function turns plain text to angular component (every component file need this)
import { Component, OnInit } from '@angular/core';

//importing Router service class (this only works because provideRouter(routes) was registeres in app.config.ts)
import { Router } from '@angular/router'

import { UserCard } from '../user-card/user-card'; 

import { GetUsers } from '../services/get-users';

import { User } from '../models/user';

import { FormsModule } from '@angular/forms';

import { UserDetail } from '../user-detail/user-detail';

//this decorator marks the class below as a component
//selector defines tag name <app-user></app-user> 
//standalone: this component manages its imports directly
//import is empty because user.html doesnt use any other component
//tamplateUrl and styleUrl: points to the HTML file and CSS file for this component
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserCard, FormsModule, UserDetail],
  templateUrl: './user.html',
  styleUrl: './user.scss',

})

export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(
    private router: Router,
    private getusers: GetUsers
  ) { }

  ngOnInit(): void {
    this.users = this.getusers.getUsers();
  }

  navigateToUserDetail2(userID: number) {
    this.router.navigate(['/users', userID]);
  }

  deleteUserWithID(userId: number) {
    this.users = this.users.filter(u => u.id !== userId);
  }

  newUserName = '';

  addUser() {
  if (!this.newUserName.trim()) return;

  this.getusers.addUser(this.newUserName);

  this.users = this.getusers.getUsers();

  this.newUserName = '';
  }
}