import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './users/add-user/add-user.component';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: UsersComponent },
  // {
  //     path: 'users',
  //     pathMatch: 'full',
  //     component: UsersComponent,
  // },
  {
    path: 'add-user',
    pathMatch: 'full',
    component: AddUserComponent,
  },
  {
    path: 'users/:id',
    data: {
      defaultRoute: true,
    },
    loadComponent: () =>
      import('./users/user/user.component').then((c) => c.UserComponent),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
