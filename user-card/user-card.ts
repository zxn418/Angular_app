import { Component } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {}

user = input.required<{ id: number; name: string }>();
 
deleteUserWithID = output<number>();
 
  
delete(){
 
  this.deleteUserWithID.emit(this.user().id);
}