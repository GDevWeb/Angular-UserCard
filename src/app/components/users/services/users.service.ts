import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
// import MOCK_USERS from '../../../../../data/MOCK_USERS';
import { Genre, Subscription, User } from '../../../../../types/user.type';
import userJSON from '../../../../assets/data/users.json';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // private users$ = new BehaviorSubject<User[]>(MOCK_USERS);
  private users$ = new BehaviorSubject<User[]>(
    (userJSON as any[]).map((user) => ({
      ...user,
      account: {
        ...user.account,
        subscription: user.account.subscription as Subscription, // Ensure proper type casting
      },
    }))
  );
  filteredUserList: User[] = [];

  userId!: number;

  private router = new Router();

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
    console.log('user id', newUser.id);

    this.users$.next(updatedUsers);
    this.saveUsers(updatedUsers);
    console.log('From userService component, addUser', this.users$);
  }

  // --Read--
  getUsers() {
    const userFromStorage = localStorage.getItem('users');

    if (userFromStorage) {
      const parsedUsers = JSON.parse(userFromStorage);

      const normalizedUsers = parsedUsers.map((user: User) => ({
        ...user,

        skills: Array.isArray(user.skills)
          ? user.skills
          : Object.values(user.skills || {}),
        hobbies: Array.isArray(user.hobbies)
          ? user.hobbies
          : Object.values(user.hobbies || {}),
      }));
      this.users$.next(normalizedUsers);
    }
    return this.users$.asObservable();
  }

  /* ***Utils*** */
  getCounterUsers(): number {
    return this.users$.getValue().length;
  }

  selectedUserId(userId: number) {
    this.userId = Number(userId);
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
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 3000);
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

  /* ***User details*** */
  setUserGenre(genre: Genre): string {
    switch (genre) {
      case 'male':
        return '🚹 men';
      case 'female':
        return '🚺 women';
      case 'other':
        return '⚧️ other';
      default:
        return '❓ unknown';
    }
  }

  /* *** Get the value of the account_status *** */
  setStatusValue(index: number): string {
    const user = this.users$.getValue().find((u) => u.id === index);
    if (!user || typeof user.account?.status !== 'boolean') return 'Disabled';

    return user.account.status ? 'Enabled' : 'Disabled';
  }

  setColorStatus(value: string): string {
    let color: string;

    if (value === 'Enabled') return (color = 'text-green-500');

    return (color = 'text-red-500');
  }

  /* ***Utils*** */
  private saveUsers(users: User[]): void {
    console.log('[Local Storage] - saveUsers');
    localStorage.setItem('users', JSON.stringify(users));
  }
}
