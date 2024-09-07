import { Component, OnInit } from '@angular/core';
import { PasswordManagerService } from '../services/password-manager.service'; // Assuming you have a service for fetching passwords
import { Password } from '../models/password.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-list',
  templateUrl: './password-list.component.html',
  styleUrls: ['./password-list.component.scss'],
})
export class PasswordListComponent implements OnInit {
  itemPerPage = 10;
  page = 1;
  loading = true;
  passwords: any;
  passwordError = 'No Passwords Found!';
  passwordName = 'name';
  isListDescending = false;
  deletePopupShown = false;
  deletePasswords: any = {
    id: '',
    app: '',
  };
  confirmText: string = '';
  totalPasswords: any;
  sortField: any;
  constructor(
    private passwordService: PasswordManagerService,
    private router: Router
  ) {
    this.getPasswords();
  }

  ngOnInit(): void {}
  sort(key: string) {
    this.passwordName = key;
    this.isListDescending = !this.isListDescending;
  }
  changePage(pageNumber: number) {
    this.page = pageNumber;
    this.getPasswords();
  }

  getPasswords() {
    // this.layoutService.loaderShown$.next(true);
    this.passwordService.getPasswords().subscribe(
      (response) => {
        this.loading = false;
        this.passwords = response;
        this.totalPasswords = this.passwords.length;
      },
      (err) => {
        this.loading = false;
        this.passwordError = JSON.stringify(err);
      }
      // () => this.layoutService.loaderShown$.next(false)
    );
  }

  onChangePerPage(perPage: number) {
    this.itemPerPage = +perPage;
    this.page = 1;
    this.loading = true;
    this.passwords = [];
    this.getPasswords();
  }

  addPassword() {
    this.router
      .navigate(['master-data/calendars/add-update-calendar/'], {
        queryParams: { editable: true },
      })
      .catch((err) => {
        // this.layoutService.showError(err);
      });
  }
  viewPassword(password: any) {
    this.navigateToPassword(password.id, false);
  }
  navigateToPassword(passwordId: number, editable: boolean) {
    this.router
      .navigate(['master-data/calendars/add-update-calendar/', passwordId], {
        queryParams: { editable },
      })
      .catch((err: any) => {
        // this.layoutService.showError(err);
      });
  }
  editPassword(password: any) {
    this.navigateToPassword(password.id, true);
  }
  deletePassword(id: number) {
    this.passwordService.deletePassword(id).subscribe(
      () => {
        this.deletePopupShown = false;
        // this.layoutService.toast$.next({
        //   text: 'Success! Calendar  Deleted successfully',
        //   type: Toast.success,
        // });
        this.getPasswords();
      },
      (_err) => {
        console.log(_err);
        // this.layoutService.showError(_err);
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
    this.deletePasswords.name = password.app;
    this.confirmText =
      'Are you sure you want to delete ' + this.deletePasswords.app + '?';
    this.deletePopupShown = true;
  }
}
