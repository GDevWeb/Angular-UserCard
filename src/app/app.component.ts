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
  @Input() usersList: User[] = users;
}

/* 
1. ✅Toggle a simple title
2. ✅create a header component
    >✅Add an image
2. ✅create a components/userCard-component
*** Input() ***
3.  >✅render data from MOCK_USER
      >✅@for
4.  >conditionally render data :
      >✅@if @else ...
      >✅to fix the rendering of card on user.account.status from enum
      
*** Event ***
5. create a simple function greetUser that displays the name and some details
    a little bit complex handle the the value for property:
     >account>status
     >account>subscription
***@Output()***
6. create a function that toggles the card-cotent 

*/
