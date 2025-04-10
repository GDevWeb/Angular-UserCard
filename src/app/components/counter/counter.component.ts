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
