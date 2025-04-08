import { Component } from '@angular/core';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
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
