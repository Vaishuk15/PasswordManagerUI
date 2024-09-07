import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Password } from '../models/password.model';
@Injectable({
  providedIn: 'root',
})
export class PasswordManagerService {
  constructor(private http: HttpClient) {}
  baseUrl: any = environment.baseUrl;

  getPasswords(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}passwords`);
  }

  getPasswordById(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}passwords/${id}`);
  }

  addPassword(password: Password): Observable<any> {
    return this.http.post(`${this.baseUrl}passwords`, password);
  }

  updatePassword(id: number, password: any): Observable<any> {
    return this.http.put(`${this.baseUrl}passwords/${id}`, password);
  }

  deletePassword(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}passwords/${id}`);
  }
}
