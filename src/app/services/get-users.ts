import { Injectable } from '@angular/core';
import { User } from '../models/user';


@Injectable({
  providedIn: 'root'
})

export class GetUsers {
    private users: User[] = [
        { id: 1, name: 'Ali', age: 20 },
        { id: 2, name: 'Sara', age: 17 },
        { id: 3, name: 'Ahmed', age: 25 }
    ];
    getUsers(): User[] {
        return this.users;
    }

    addUser(name: string): void {
        const newId =
            this.users.length > 0
                ? Math.max(...this.users.map(user => user.id)) + 1
                : 1;

        this.users.push({
            id: newId,
            name,
            age: 18
        });
}
}