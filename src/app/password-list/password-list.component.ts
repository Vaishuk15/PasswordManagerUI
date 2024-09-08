import { Component } from '@angular/core';
import { PasswordManagerService } from '../services/password-manager.service';
import { Password } from '../models/password.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.scss'],
})
export class PasswordListComponent {
  passwords: any;
  passwordError = 'No Passwords Found!';
  passwordName = 'name';
  deletePopupShown = false;
  deletePasswords: any = {
    id: '',
    app: '',
  };
  confirmText: string = '';
  constructor(
    private passwordService: PasswordManagerService,
    private router: Router
  ) {
    this.getPasswords();
  }

  getPasswords() {
    this.passwordService.getPasswords().subscribe(
      (response) => {
        this.passwords = response;
      },
      (err) => {
        this.passwordError = JSON.stringify(err);
      }
    );
  }

  addPassword() {
    this.router
      .navigate(['passwords/add-update-password/'], {
        queryParams: { editable: true },
      })
      .catch((err) => {
        alert(' Error adding password: ' + err);
      });
  }
  viewPassword(password: any) {
    this.navigateToPassword(password.id, false);
  }
  navigateToPassword(passwordId: number, editable: boolean) {
    this.router
      .navigate(['passwords/add-update-password/', passwordId], {
        queryParams: { editable },
      })
      .catch((err: any) => {
        alert('Error navigating to password: ' + err);
      });
  }
  editPassword(password: any) {
    this.navigateToPassword(password.id, true);
  }
  deletePassword(id: number) {
    this.passwordService.deletePassword(id).subscribe(
      () => {
        this.deletePopupShown = false;
        this.getPasswords();
      },
      (_err) => {
        alert('Error deleting password');
      }
    );
  }
  receiveCloseStatus($event: any): void {
    if ($event === false) {
      this.deletePopupShown = false;
    } else {
      this.deletePassword(this.deletePasswords.id);
    }
  }
  confirmDelete(password: Password): void {
    this.deletePasswords.id = password.id;
    this.deletePasswords.app = password.app;
    this.confirmText =
      'Are you sure you want to delete ' + this.deletePasswords.app + '?';
    this.deletePopupShown = true;
  }
}
