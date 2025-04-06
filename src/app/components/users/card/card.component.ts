import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Genre, Subscription, User } from '../../../../../types/user.type';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() userList!: User[];
  @Output() selectedUserId = new EventEmitter<number>();
  @Output() deleteUser = new EventEmitter<number>();
  @Output() completedTask = new EventEmitter<number>();

  isCompleted: boolean[] = [];

  public subscription = Subscription;
  public cardVisibility: boolean[] = [];

  ngOnInit(): void {
    this.cardVisibility = this.userList.map(() => false);
  }

  /* *** Utils *** */
  getUserId(userId: number) {
    console.log('from child component - getUserId', userId);

    this.selectedUserId.emit(userId);
  }

  getDisplayGenre(genre: Genre): string {
    switch (genre) {
      case Genre.male:
        return '🚹 men';
      case Genre.female:
        return '🚺 women';
      case Genre.other:
        return '⚧️ other';
      default:
        return '❓ unknown';
    }
  }

  /* *** Get the value of the account_status *** */
  getStatusValue(index: number) {
    const getStatus = this.userList[index].account.status;

    const statusValue = getStatus ? 'Enabled' : 'Disabled';
    this.setColorStatus(statusValue);

    return statusValue;
  }

  setColorStatus(value: string): string {
    let color: string;

    if (value === 'Enabled') return (color = 'text-green-500');

    return (color = 'text-red-500');
  }

  /* *** Get the value of the subscription *** */
  getSubscriptionStatus(index: number): string {
    const subscriptionIndex = this.userList[index].account.subscription;
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

  greetUser(index: number): string {
    const user = this.userList.find((u) => u.id === index);

    const message = `${user?.fname} ${user?.lname} says hello`;

    alert(message);

    return message;
  }

  /* ***Toggle card content *** */
  toggleCardContent(index: number): void {
    this.cardVisibility[index] = !this.cardVisibility[index];
  }

  isCardContentVisibility(index: number): boolean {
    return this.cardVisibility[index];
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
