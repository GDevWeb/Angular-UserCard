import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Genre, Subscription, User } from '../../../../../types/user.type';
import { UsersService } from '../services/users.service';
@Component({
  selector: 'app-user-detail',
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService;
  public subscription = Subscription;

  @Output() selectedUserId = new EventEmitter<number>();
  @Output() deleteUser = new EventEmitter<number>();
  @Output() completedTask = new EventEmitter<number>();

  public cardVisibility!: boolean;

  users: User[] = [];
  user!: User;
  userId!: number;
  isCompleted: boolean[] = [];

  constructor(userService: UsersService) {
    this.userService = userService;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
    });

    this.userService.getUsers().subscribe((users) => (this.users = users));
  }

  setUser(): User | undefined {
    if (this.userId <= 0 || this.userId > this.users.length) {
      return undefined;
    }

    const user = this.users.find((user) => user.id === this.userId);

    if (!user) {
      throw Error(`Error user not found`);
    }

    return user;
  }

  /* *** Get the value of the user.genre =>badge *** */
  getDisplayGenre(genre: Genre): string {
    return this.userService.setUserGenre(genre);
  }

  /* *** Get the value of the account_status *** */
  getStatusValue() {
    return this.userService.setStatusValue(this.userId);
  }

  /* *** Get the value of the subscription *** */
  getSubscriptionStatus(index: number): string {
    const subscriptionIndex = this.users[index].account.subscription;
    const subscriptionStatusValue = this.subscription[subscriptionIndex];

    this.setColorSubscriptionStatus(subscriptionStatusValue);
    return `${subscriptionStatusValue
      .slice(0, 1)
      .toLocaleUpperCase()}${subscriptionStatusValue.slice(1)}`;
  }

  setColorSubscriptionStatus(status: string): string {
    let color: string;

    switch (status) {
      case 'Free':
        color = 'text-orange-500';
        break;
      case 'Member':
        color = 'text-green-500';
        break;
      case 'Gold':
        color = 'text-amber-500';
        break;
      default:
        color = 'text-gray-500';
        break;
    }
    return color;
  }

  getColorStatus(): string {
    return this.userService.setColorStatus(this.userId.toString());
  }

  setColorStatus(value: string): string {
    return this.userService.setColorStatus(this.userId.toString());
  }

  /* ***Toggle card content *** */
  toggleCardContent(): void {
    this.cardVisibility = !this.cardVisibility;
  }

  isCardContentVisibility(): boolean {
    return this.cardVisibility;
  }

  /* *** CRUD *** */
  handleDeleteUser(userId: number) {
    this.userService.deleteUser(userId);
  }

  /* *** Handle tasks*** */
  selectedUserTask(taskId: number) {
    console.log(taskId);

    this.completedTask.emit(taskId);
  }
}
