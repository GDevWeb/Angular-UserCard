import { Injectable } from '@angular/core';
import MOCK_USERS from '../../../../../data/MOCK_USERS';
import { User } from '../../../../../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = MOCK_USERS;
  filteredUsers = [...this.users];

  userId!: number;

  constructor() {}

  /* CRUD */
  // --Create--
  createUser(newUser: User) {
    this.users.push(newUser);
    console.log('From parent component, addUser', this.users);
  }

  // --Read--
  getUsers(): User[] {
    return this.users;
  }

  //--Update--

  // --Delete
  deleteUser(userId: number) {
    const userToDelete = this.users.find((user) => user.id === userId);
    if (!userToDelete) return;

    const confirmation = confirm(
      `Do you really want to delete ${userToDelete.fname} ${userToDelete.lname}?`
    );
    if (!confirmation) return;

    this.users = this.users.filter((u) => u.id !== userId);
  }

  /* ***Filter*** */
  filteredUserList(filterValue: string): User[] {
    const filterValueCleaned = filterValue.toLowerCase();
    return (this.filteredUsers = this.users.filter(
      (user) =>
        user.fname.toLowerCase().includes(filterValueCleaned) ||
        user.lname.toLowerCase().includes(filterValueCleaned) ||
        user.job.toLowerCase().includes(filterValueCleaned)
    ));
  }

  /* ***Utils*** */
  selectedUserId(userId: number) {
    this.userId = userId;

    console.log(`[UserServices] - selected userId:`, userId);
  }
}
