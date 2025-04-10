import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/layout/footer/footer.component';
import { HeaderComponent } from './components/layout/header/header.component';

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

    
    *** services ***
    8.create a user.service
    > ✅get
    > ✅create
    > update
    > ✅delete

    >tasks services
      >create a task
      >✅updateStatus
      >delete

    >localStorage Services

    >Form new user 
    >createUSer Services
    
    
    *** Extra UI *** 
    Next session
    - add a toast confirming some user action

    */
