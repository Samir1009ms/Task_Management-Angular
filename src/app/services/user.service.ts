import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserModel } from "../models/user.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl ='https://task-management-backend-eight.vercel.app/api'
  private  mailUrl= 'http://localhost:5500/api/'
  constructor( private http:HttpClient) { }

  getUsers():Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.baseUrl}/users`)
  }
  getUser(id:number):Observable<UserModel>{
    return this.http.get<UserModel>(`${this.baseUrl}/users${id}`)
  }
  addUser(user : UserModel):Observable<UserModel>{
    return this.http.post<UserModel>(`${this.mailUrl}/register`,user)
  }
}
