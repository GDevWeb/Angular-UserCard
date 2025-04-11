import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, User } from '../../../../../types/user.type';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css',
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private userService = inject(UsersService);

  public user!: User | undefined;
  public userId!: number;
  public cardVisibility = false;
  public Subscription = Subscription;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.userId = +params['userId'];
      this.userService.getUsers().subscribe((users) => {
        this.user = users.find((user) => user.id === this.userId);
      });
    });
  }

  getDisplayGenre(): string {
    return this.userService.setUserGenre(this.user?.genre || 'other');
  }

  getStatusValue(): string {
    return this.userService.setStatusValue(this.userId);
  }

  getColorStatus(): string {
    return this.userService.setColorStatus(this.getStatusValue());
  }

  getSubscriptionStatus(): string {
    const subKey = this.user?.account?.subscription ?? 0;
    const status = Subscription[subKey];
    return `${status.slice(0, 1).toUpperCase()}${status.slice(1)}`;
  }

  getSubscriptionColor(): string {
    const status = this.getSubscriptionStatus();
    switch (status) {
      case 'Free':
        return 'text-orange-500';
      case 'Member':
        return 'text-green-500';
      case 'Gold':
        return 'text-amber-500';
      default:
        return 'text-gray-500';
    }
  }

  toggleCardContent(): boolean {
    return (this.cardVisibility = !this.cardVisibility);
  }

  handleDeleteUser(): void {
    if (this.user) {
      this.userService.deleteUser(this.user.id);
    }
  }

  isArray(value: any): boolean {
    return Array.isArray(value);
  }

  getUserAccount(): number | boolean {
    const account = this.user?.account;

    if (!account) return 0;

    const { subscription, status } = account;

    const subscriptionIsValid =
      subscription !== undefined && subscription !== null;
    const statusIsValid = typeof status === 'boolean';

    if (!subscriptionIsValid || !statusIsValid) {
      return 0;
    }

    return status && subscription;
  }
}
