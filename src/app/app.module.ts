import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PasswordListComponent } from './password-list/password-list.component';
import { DeleteConfirmationDialogComponent } from './delete-confirmation-dialog/delete-confirmation-dialog.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUpdatePaswordComponent } from './add-update-pasword/add-update-pasword.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PasswordListComponent,
    DeleteConfirmationDialogComponent,
    AddUpdatePaswordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
