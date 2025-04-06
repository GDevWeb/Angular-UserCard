import { Component, inject, Input } from '@angular/core';
import MOCK_USERS from '../../data/MOCK_USERS';
import { type User } from '../../types/user.type';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CardComponent } from './components/users/card/card.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UserService } from './services/user-service.service';

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
  userService: UserService = inject(UserService);
  @Input() userList = MOCK_USERS;

  @Input() filteredUserList: User[] = [];

  /* *** Utils*** */
  userId!: number;

  onSelectedUserId(userId: number) {
    this.userId = userId;

    console.log(`[AppComponent] - selected userId:`, userId);
  }

  onDeleteUser(userId: number) {
    const userToDelete = this.userList.find((user) => user.id === userId);
    if (!userToDelete) return;

    const confirmation = confirm(
      `Do you really want to delete ${userToDelete.fname} ${userToDelete.lname}?`
    );
    if (!confirmation) return;

    this.userList = this.userList.filter((u) => u.id !== userId);
  }

  onFilterUserList(filterValue: string): void {
    const filterValueCleaned = filterValue.toLowerCase();
    this.filteredUserList = this.userList.filter(
      (user) =>
        user.fname.toLowerCase().includes(filterValueCleaned) ||
        user.lname.toLowerCase().includes(filterValueCleaned) ||
        user.job.toLowerCase().includes(filterValueCleaned)
    );
    console.log('From parent', filterValue);
  }

  /* *** Handle tasks*** */
  onCompleteTask(taskId: number) {
    const user = this.userList[this.userId];
    if (!user) return;

    const taskToDelete = user.tasks.find((task) => task.id === taskId);
    if (!taskToDelete) return;

    const confirmation = confirm(
      `Do you really want to delete the task "${taskToDelete.title}"?`
    );

    if (confirmation) {
      user.tasks = user.tasks.filter((task) => task.id !== taskId);
    }

    return this.userList;
  }

  /* *** *** */
  handleAddUser(newUser: User) {
    this.userList.push(newUser);
    console.log('From parent component, addUser', this.userList);
  }
}

/* 
1. ✅Toggle a simple title
2. ✅create a header component
    >✅Add an image
2. ✅create a components/userCard-component
*** Input() ***
3.  >✅render data from MOCK_USER
      >✅@for
*** Event ***
***@Output()***
4.  ✅create a function that toggles the card-content 
          ✅create a function to delete an user
5. >✅Functions      
      >✅create a simple function greetUser that displays the name and some details
      ✅handle the the value for property:
      >✅account>status
      >✅account>subscription 

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

*** services ***
8.create a user.service
  > get
  > add
  > update
  > delete
>localStorage Services
>Form createUSer Services
*/
