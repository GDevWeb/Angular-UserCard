import { Component } from '@angular/core';
import { User } from '../../../../../types/user.type';
import { FilterComponent } from '../../filter/filter.component';
import { CardComponent } from '../card/card.component';
import { UsersService } from '../services/users.service';
import { TaskService } from '../tasks/task.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [FilterComponent, CardComponent],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export class UsersComponent {
  userList!: User[];
  taskList!: [];

  /* *** Utils*** */
  userId!: number;

  constructor(
    private userService: UsersService,
    private taskService: TaskService
  ) {}

  /* *** Read *** */
  ngOnInit() {
    this.userList = this.userService.getUsers();
  }

  /* *** Create User *** */
  handleAddUser(newUser: User) {
    this.userService.createUser(newUser);
    this.userList = this.userService.getUsers();
  }

  /* *** user by Id *** */
  onSelectedUserId(userId: number) {
    this.userId = userId;

    console.log(`[UserServices] - selected userId:`, userId);
  }

  onDeleteUser(userId: number) {
    this.userList = this.userService.deleteUser(userId);
  }

  onFilterUserList(filterValue: string): void {
    this.userList = this.userService.filterUserList(filterValue);
    console.log('From parent', filterValue);
  }

  /* ***Tasks*** */
  /* *** Handle tasks*** */
  onCompleteTask(taskId: number) {
    this.userList = this.taskService.toggleTaskCompletion(taskId, this.userId);
  }
}
