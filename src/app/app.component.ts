import { Component, Input } from '@angular/core';
import users from '../../data/MOCK_USERS';
import { User } from '../../types/user.type';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { CardComponent } from './components/users/card/card.component';

@Component({
  selector: 'app-root',
  imports: [CardComponent, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @Input() userList: User[] = users;

  onDeleteUser(userId: number) {
    const indexToDelete = this.userList.findIndex((user) => user.id === userId);
    const user = this.userList[indexToDelete];
    console.log(user.fname, 'had been deleted');

    const updatedList = this.userList.filter((u) => u.id !== user.id);

    return (this.userList = updatedList);
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
6.  >conditionally render data :
            >✅@if @else ...
            >✅to fix the rendering of card on user.account.status from enum
*** services ***
7.create a user.service
  > get
  > add
  > update
  > delete
*/
