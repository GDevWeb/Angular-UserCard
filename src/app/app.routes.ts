import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/users/card/card.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: CardComponent },
];
