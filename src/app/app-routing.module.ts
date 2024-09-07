import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordListComponent } from './password-list/password-list.component';

const routes: Routes = [
  { path: '', component: PasswordListComponent },
  // { path: 'passwords/add', component: AddPasswordComponent },
  // { path: 'passwords/:id', component: PasswordDetailsComponent },
  {
    path: '**',
    redirectTo: 'passwordManagerList',
  },
  {
    path: 'passwordManagerList',
    component: PasswordListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
