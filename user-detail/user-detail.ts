import { Component } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

interface UserModel {
  id: number;
  name: string;
  age: number;
}

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.scss',
})
export class UserDetail {
  users: UserModel[] = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 16 },
    { id: 3, name: 'Charlie', age: 30 },
    { id: 4, name: 'Diana', age: 12 },
  ];

  selectedUser: UserModel | undefined = undefined;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.selectedUser = this.users.find(u => u.id === id);
  }

  goBack() {
    this.router.navigate(['/users']);
  }
}