import { Injectable } from '@angular/core';
import { Genre, Subscription, User } from '../../../types/user.type';

@Injectable({
  providedIn: 'root',
})
export class NewUserService {
  constructor() {}

  /* ***Utils*** */
  generateRandomId(): number {
    const random = Math.floor(Math.random() * 1e9);
    return random;
  }

  setGenreUrl(value: string): string {
    switch (value) {
      case 'female':
        return 'women';
      case 'male':
        return 'men';
      case 'other':
      default:
        return 'men';
    }
  }

  generateRandomImgUrl(): number {
    const random = Math.floor(Math.random() * 99);

    return random;
  }

  createUserFromForm(formValue: any): User {
    return {
      ...formValue,
      id: this.generateRandomId(),
      genre: formValue.genre as Genre,
      fname: formValue.fname ?? '',
      lname: formValue.lname ?? '',
      age: formValue.age ?? 18,
      imgURL: `https://randomuser.me/api/portraits/${this.setGenreUrl(
        formValue.genre?.toString() || 'male'
      )}/${this.generateRandomImgUrl()}.jpg`,
      job: formValue.job ?? '',
      skills: formValue.skills ?? [],
      hobbies: formValue.hobbies ?? [],
      account: { status: true, subscription: Subscription.free },
      tasks: [],
    };
  }
}
