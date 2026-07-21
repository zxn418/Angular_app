import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { User } from '../models/user';
import { GetUsers } from '../services/get-users';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})

export class UserDetail {

  constructor(private route: ActivatedRoute,
      private router: Router,
      private getUsers: GetUsers) {}

  selectedUser: User | undefined;

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedUser = this.getUsers
    .getUsers()
    .find(user => user.id === id);
  }
  goBack() {
    this.router.navigate(['/users']);
  }
}