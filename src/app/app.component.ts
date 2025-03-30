import { Component, Input } from '@angular/core';
import users from '../../data/MOCK_USERS';
import { User } from '../../types/user.type';
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

  onDeleteUser(userId: number) {
    const indexToDelete = this.userList.findIndex((user) => user.id === userId);
    const user = this.userList[indexToDelete];
    console.log(user.fname, 'had been deleted');

    const updatedList = this.userList.filter((u) => u.id !== user.id);

    return (this.userList = updatedList);
  }

  onFilterUserList(filterValue: string): void {
    this.filteredUserList = this.userList.filter(
      (user) =>
        user.fname.toLowerCase().includes(filterValue.toLowerCase()) ||
        user.lname.toLowerCase().includes(filterValue.toLowerCase())
    );
    console.log('From parent', filterValue);
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
    > name
    > account_status
    > subscription: states

6.  >conditionally render data :
            >✅@if @else ...
            >✅to fix the rendering of card on user.account.status from enum
            > fix the checkbox for the tasklist
            
*** services ***
7.create a user.service
  > get
  > add
  > update
  > delete
*/
