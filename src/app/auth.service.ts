// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Cards } from './cards';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedInUserSubject: BehaviorSubject<string> = new BehaviorSubject<string>('');

  private apiUrl = 'https://localhost:44304/api/Insurance'; // Assuming API URL

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<any> {
    const credentials = { UserName: username, Password: password };
    return this.http.post<any>(`${this.apiUrl}/login`, credentials);
  }

  getUserDetails(username: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/pol/${username}`);
  }

  setLoggedInUser(user: string): void {
    this.loggedInUserSubject.next(user);
  }

  getLoggedInUser(): Observable<string> {
    return this.loggedInUserSubject.asObservable();
  }
  addCard(cardDetails: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/cards`, cardDetails);
  }
  getAllCards(): Observable<Cards[]> {
    return this.http.get<Cards[]>(`${this.apiUrl}/cards`);
  }
  deleteCard(userName: string): Observable<any> {
    const url = `${this.apiUrl}/${userName}`; // Assuming card has an 'id' property
    return this.http.delete<any>(url);
  }
  

}
