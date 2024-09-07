import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PasswordListComponent } from './password-list/password-list.component';
import { AddUpdatePaswordComponent } from './add-update-pasword/add-update-pasword.component';

const routes: Routes = [
  { path: '', component: PasswordListComponent },
  {
    path: 'passwords/add-update-password',
    component: AddUpdatePaswordComponent,
  },
  {
    path: 'passwords/add-update-password/:id',
    component: AddUpdatePaswordComponent,
  },
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
