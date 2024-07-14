import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = "http://localhost:3000";
  public logueado: boolean = false;
  public user: User;

  constructor(private http: HttpClient) {}

  public register(user: User) {
    return this.http.post(this.url + "/register", user);
  };

  public login(user: User) {
    return this.http.post(this.url + "/login", user);
  };

  public edit(user: User) {
    return this.http.put(this.url + "/usuarios", user);
  };
};
