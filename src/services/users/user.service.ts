import { Injectable } from '@angular/core';
import { HttpService } from '../shared/http-service';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private userslocal = new BehaviorSubject<any[]>([]);
  tempUsers$ = this.userslocal.asObservable();
  usersArray: IUser['GetUsers'][] = [];

  constructor(private http: HttpService) {
    this.getAllUsers();
  }

  userpath = 'users';

  addUser(user: any) {
    this.usersArray = [user, ...this.usersArray];
    localStorage.setItem('user', JSON.stringify(user));
  }

  getAllUsers() {
    this.http.get<IUser['GetUsers'][]>(`${this.userpath}`).subscribe({
      next: (data: IUser['GetUsers'][]) => {
        this.usersArray = data;
        this.userslocal.next(data);
      },
    });
    return this.usersArray;
  }

  getUserById(userId: number | string): Observable<IUser['GetUsers']> {
    return this.http.get<IUser['GetUsers']>(`${this.userpath}/${userId}`);
  }

  getUserFromLocalById(userId: number | string) {
    let localStoredUser = JSON.parse(localStorage.getItem('user') || '{}');
    let user = this.usersArray.find((u) => u.id == localStoredUser.id);

    return localStoredUser;
  }
}
