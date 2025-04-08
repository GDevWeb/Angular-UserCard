import { Injectable } from '@angular/core';
import MOCK_USERS from '../../../../../data/MOCK_USERS';
import { User } from '../../../../../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = MOCK_USERS;
  filteredUserList: User[] = [];

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

  /* ***Utils*** */
  selectedUserId(userId: number) {
    this.userId = userId;

    console.log(`[UserServices] - selected userId:`, userId);
  }

  //--Update--
  updateUser(userId: number): void {
    ('');
  }

  // --Delete
  deleteUser(userId: number) {
    const userToDelete = this.users.find((user) => user.id === userId);

    if (!userToDelete) return this.users;

    const confirmation = confirm(
      `Do you really want to delete ${userToDelete.fname} ${userToDelete.lname}?`
    );

    if (!confirmation) return this.users;

    const filteredUsers = this.users.filter((u) => u.id !== userId);

    console.log(`From userService - user successfully deleted`);

    console.log('user service after deleting', this.users);

    return (this.users = filteredUsers);
  }

  // /* ***Filter*** */
  filterUserList(filterValue: string): User[] {
    const filterValueCleaned = filterValue.toLowerCase();
    this.filteredUserList = this.users.filter(
      (user) =>
        user.fname.toLowerCase().includes(filterValueCleaned) ||
        user.lname.toLowerCase().includes(filterValueCleaned) ||
        user.job.toLowerCase().includes(filterValueCleaned)
    );

    return this.filteredUserList;
  }
}
