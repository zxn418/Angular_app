//decorator function turns plain text to angular component (every component file need this)
import { Component } from '@angular/core';

//importing Router service class (this only works because provideRouter(routes) was registeres in app.config.ts)
import { Router } from '@angular/router'

//defining a TypeScript interface (custome type describing the shape an object)
//it says:any UserModel object must have a numeric id, a string name, and a numeric age
interface UserModel {
  id: number;
  name: string;
  age: number;
}

//this decorator marks the class below as a component
//selector defines tag name <app-user></app-user> 
//standalone: this component manages its imports directly
//import is empty because user.html doesnt use any other component
//tamplateUrl and styleUrl: points to the HTML file and CSS file for this component
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.scss',

})

//declaring actual class named User, this is the exact class that gets imported and refrenced
export class User {
  users: UserModel[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 16 },
    { id: 3, name: 'Charlie', age: 30 },
    { id: 4, name: 'Diana', age: 12 },
  ];

  constructor(private router: Router){}

  navigateToUserDetail2(userID: number){
    this.router.navigate(['/users', userID])
  }
}