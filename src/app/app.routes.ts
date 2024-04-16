import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
    title: 'officelite | Home'
  },
  {
    path: "sign-up",
    title: 'officelite | Sign up',
    component: SignUpComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }
];
