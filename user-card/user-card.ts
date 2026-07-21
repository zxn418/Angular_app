import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.scss',
})
export class UserCard {
  user = input.required<{ id: number; name: string }>();
 
  deleteUserWithID = output<number>();
 
  delete(){
    this.deleteUserWithID.emit(this.user().id);
  }
}