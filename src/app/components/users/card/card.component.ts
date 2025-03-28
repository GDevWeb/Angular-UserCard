import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription, User } from '../../../../../types/user.type';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements OnInit {
  @Input() userList!: User[];

  subscription = Subscription;
  cardVisibility: boolean[] = [];

  ngOnInit(): void {
    this.cardVisibility = this.userList.map(() => false);
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

  toggleCardContent(index: number): void {
    this.cardVisibility[index] = !this.cardVisibility[index];
  }

  isCardContentVisibility(index: number): boolean {
    return this.cardVisibility[index];
  }
}
