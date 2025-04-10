import { Component } from '@angular/core';
import { UsersService } from '../users/services/users.service';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  counter!: number;

  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.counter = this.userService.getCounterUsers();
  }
}

/* 
type UserStatus = "active" | "inactive" | "pending";

function isValidStatus(status: string): status is UserStatus {
  return ["active", "inactive", "pending"].includes(status);
}

function filterValidStatuses(list: string[]): UserStatus[] {
  return list.filter(isValidStatus);
}

const rawStatuses = ["active", "inactive", "pending", "banned", "vacancy"];
const filtered: UserStatus[] = filterValidStatuses(rawStatuses);

console.log(filtered); // → ["active", "inactive", "pending"]


*/
