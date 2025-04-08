import { Component } from '@angular/core';
import { type User } from '../../types/user.type';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CardComponent } from './components/users/card/card.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UsersService } from './components/users/services/users.service';
import { TaskService } from './components/users/tasks/task.service';

@Component({
  selector: 'app-root',
  imports: [
    CardComponent,
    HeaderComponent,
    FooterComponent,
    FilterComponent,
    NewUserComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
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
  }

  /* *** user by Id *** */
  onSelectedUserId(userId: number) {
    // this.userService.selectedUserId(userId);
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
/* 
  @Computed()

  handle a filter, filtering:
    > ✅name
    > account_status
    > subscription: states

6.  >conditionally render data :
            >✅@if @else ...
            >✅to fix the rendering of card on user.account.status from enum
            >✅tasklist, fix the checkbox 
            
7. >form
  - ✅two ways data binding [{}] as banana box
  - ✅add an user
  - add a task

  - add a toast confirming some user action
  
*** services ***
8.create a user.service
  > ✅get
  > ✅add
  > update
  > ✅delete
   
>localStorage Services
>Form createUSer Services
*/
