import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>("https:localhost:44348/api/User")
  }

  getUserByID(id: number): Observable<User>{
    return this.http.get<User>("https:localhost:44348/api/User/" + id);
  }

  addUser(user: User) {
    return this.http.post<User>("https://localhost:44348/api/user", user);
  }

  updateUser(userID: number, user: User) {
    return this.http.put<User>("https://localhost:44348/api/user/" + userID, user);
  }

  deleteUser(userID: number) {
    return this.http.delete<User>("https://localhost:44348/api/user/" + userID);
  }
}44348