import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Genre, Subscription, User } from '../../../../../types/user.type';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private userService;
  public subscription = Subscription;

  @Output() selectedUserId = new EventEmitter<number>();
  @Output() deleteUser = new EventEmitter<number>();
  @Output() completedTask = new EventEmitter<number>();

  public cardVisibility!: boolean;

  users: User[] = [];
  user!: User;
  userId!: number;

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
    const user = this.users.find((user) => user.id === this.userId);

    if (!user) {
      throw Error(`Error user not found`);
    }

    return user;
  }

  /* *** Get the value of the user.genre =>badge *** */
  getDisplayGenre(genre: Genre): string {
    return this.userService.setUserGenre(this.user.genre);
  }

  /* *** Get the value of the account_status *** */
  getStatusValue() {
    this.userService.setStatusValue(this.userId);
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

  /* ***Toggle card content *** */
  toggleCardContent(): void {
    this.cardVisibility = !this.cardVisibility;
  }

  isCardContentVisibility(): boolean {
    return this.cardVisibility;
  }

  /* *** CRUD *** */
  handleDeleteUser(userId: number) {
    this.deleteUser.emit(userId);
  }

  /* *** Handle tasks*** */
  selectedUserTask(taskId: number) {
    console.log(taskId);

    this.completedTask.emit(taskId);
  }
}
