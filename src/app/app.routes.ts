import { Routes } from '@angular/router';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { NotFoundComponent } from './components/forbidden/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { NewUserComponent } from './components/users/new-user/new-user.component';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users/users.component';
import { AuthGuard } from './guards/auth.guard';
import { UserDetailGuard } from './guards/user-detail.guard';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-list', component: UsersComponent },
  { path: 'add-user', component: NewUserComponent },
  {
    path: 'users/:userId',
    component: UserDetailComponent,
    canActivate: [UserDetailGuard],
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
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];
