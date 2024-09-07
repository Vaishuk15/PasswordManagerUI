import { Component } from '@angular/core';
import { PasswordManagerService } from '../services/password-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Password } from '../models/password.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-update-pasword',
  templateUrl: './add-update-pasword.component.html',
  styleUrl: './add-update-pasword.component.scss',
})
export class AddUpdatePaswordComponent {
  passwordData = {
    app: '',
    category: '',
    userName: '',
    encryptedPassword: '',
    decryptedPassword: '',
  };
  passwordDataId: any;
  editableForm: boolean = false;
  buttonName = 'Save';
  totalPasswords: number = 0;
  message: string = '';
  errorMessage: string = '';
  passwordInfo: any = {};

  constructor(
    private passwordService: PasswordManagerService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.route.queryParams.subscribe((params) => {
      this.editableForm = params?.['editable'] === 'true' ? true : false;
    });
    this.passwordDataId = this.route.snapshot.paramMap.get('id');
    this.getPasswordById();
  }

  isPasswordValid() {
    return (
      !this.passwordData.app ||
      !this.passwordData.decryptedPassword ||
      !this.passwordData.userName ||
      this.message !== '' ||
      this.errorMessage !== ''
    );
  }

  getPasswordById() {
    this.passwordService.getPasswordById(this.passwordDataId).subscribe(
      (passwordResponse: any) => {
        if (passwordResponse) {
          this.passwordData = passwordResponse;
          this.buttonName = 'Update';
        }
      },
      (error) => console.log(error)
    );
  }

  onSubmit() {
    this.passwordInfo = this.passwordData;
    this.addOrUpdatePassword(this.passwordInfo);
  }

  // validateCalendarName(event) {
  //   this.calendarData.name = event.target.value;
  //   this.validating = true;
  //   this.master
  //     .getCalendarByName('Calendar', this.calendarData.name)
  //     .subscribe({
  //       next: (calendars: any) => {
  //         this.validating = false;
  //         if (calendars?.map((item) => item.name).length > 0) {
  //           this.message = 'Calendar Name already exists';
  //         } else {
  //           this.message = '';
  //         }
  //       },
  //       error: (_err) => {
  //         this.validating = false;
  //       },
  //     });
  // }
  goBackToPasswordsPage() {
    this.routeNavigate('passwordManagerList');
  }

  addOrUpdatePassword(password: Password) {
    let endpointUrl: Observable<any> =
      password.id != null
        ? this.passwordService.updatePassword(password.id, password)
        : this.passwordService.addPassword(password);
    endpointUrl.subscribe(
      () => {
        alert('Success! Calendar saved successfully');
        setTimeout(() => {
          this.routeNavigate('/master-data/calendars');
        }, 1000);
      },
      (_err) => {
        alert(`Error Status Code:${_err.status}! A problem has occurred.`);
      }
    );
  }

  routeNavigate(route: string) {
    this.router.navigate([route]).then(
      (navi) => {},
      (error) => {}
    );
  }
}
