import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import MOCK_USERS from '../../../../../data/MOCK_USERS';
import { User } from '../../../../../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users$ = new BehaviorSubject<User[]>(MOCK_USERS);
  filteredUserList: User[] = [];

  userId!: number;

  constructor() {
    const userFromStorage = localStorage.getItem('users');
    if (userFromStorage) {
      this.users$.next(JSON.parse(userFromStorage) as User[]);
    }
  }

  /* CRUD */
  // --Create--
  createUser(newUser: User) {
    const currentUsers = this.users$.getValue();
    const updatedUsers = [...currentUsers, newUser];
    this.users$.next(updatedUsers);
    this.saveUsers(updatedUsers);
    console.log('From userService component, addUser', this.users$);
  }

  // --Read--
  getUsers() {
    return this.users$.asObservable();
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
  deleteUser(userId: number): void {
    const currentUsers = this.users$.getValue();
    const userToDelete = currentUsers.find((user) => user.id === userId);

    if (!userToDelete) return;

    const confirmation = confirm(
      `Delete ${userToDelete.fname} ${userToDelete.lname}?`
    );
    if (!confirmation) return;

    const updatedUsers = currentUsers.filter((user) => user.id !== userId);
    this.users$.next(updatedUsers);
    this.saveUsers(updatedUsers);
  }

  // /* ***Filter*** */
  filterUserList(filterValue: string): User[] {
    const filterValueCleaned = filterValue.toLowerCase();
    this.filteredUserList = this.users$
      .getValue()
      .filter(
        (user) =>
          user.fname.toLowerCase().includes(filterValueCleaned) ||
          user.lname.toLowerCase().includes(filterValueCleaned) ||
          user.job.toLowerCase().includes(filterValueCleaned)
      );

    return this.filteredUserList;
  }

  /* ***Utils*** */
  private saveUsers(users: User[]): void {
    console.log('[Local Storage] - saveUsers');
    localStorage.setItem('users', JSON.stringify(users));
  }
}
