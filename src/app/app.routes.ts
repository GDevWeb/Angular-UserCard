import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users/users.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-list', component: UsersComponent },
  { path: 'add-user', component: NewUserComponent },
  {
    path: 'users/:userId',
    component: UserDetailComponent,
  },
  { path: 'about', component: AboutComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'admin-dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
