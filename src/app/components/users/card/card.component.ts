import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Subscription, User } from '../../../../../types/user.type';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() userList!: User[];

  subscription = Subscription;

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
}
