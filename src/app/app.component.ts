import { Component, Input } from '@angular/core';
import users from '../../data/MOCK_USERS';
import { type User } from '../../types/user.type';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CardComponent } from './components/users/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent, HeaderComponent, FooterComponent, FilterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @Input() userList: User[] = users;
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

  ℹ️@Computed()
  > use computed at least one time

  handle a filter, filtering:
    > ✅name
    > account_status
    > subscription: states

6.  >conditionally render data :
            >✅@if @else ...
            >✅to fix the rendering of card on user.account.status from enum
            >✅tasklist, fix the checkbox 
            
*** Form ***
7.create a form handling add a : 
  > user
   >task
    select he user and add the tasks
       
*** services ***
8.create a user.service
  > get
  > add
  > update
  > delete
*/
