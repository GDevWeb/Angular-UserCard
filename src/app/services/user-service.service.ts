import { Injectable } from '@angular/core';
import MOCK_USERS from '../../../data/MOCK_USERS';
import { type User } from '../../../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [...MOCK_USERS];

  getUsers(): User[] {
    return this.users;
  }
}
