import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UsersComponent } from './components/users/users/users.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-list', component: UsersComponent },
  { path: 'add-user', component: NewUserComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];
