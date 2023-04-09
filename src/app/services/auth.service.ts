import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from "rxjs";
import { ApiService } from "./api.service";
import { UserModel } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
private readonly TOKEN_NAME='token';
private _isLoggedIn$= new BehaviorSubject<boolean>(false)
  isLoggedIn$=this._isLoggedIn$.asObservable()

  user:UserModel|null

  get token():any{
  return localStorage.getItem(this.TOKEN_NAME)
  }
  constructor( private apiService:ApiService) {
  this.user = this.getUser(this.token)
  }

  hasRole(isAdmin:boolean):boolean{
    return this.user?.isAdmin===isAdmin||false
  }

  login(email : string,password:string){
    return this.apiService.login(email,password).pipe(
      tap((res:any) =>{
        localStorage.setItem(this.TOKEN_NAME,res)
        this._isLoggedIn$.next(true)
        this.user = this.getUser(res)
      })
    )
  }

  private  getUser(token:string):UserModel|null {

  if(!token){
    return null
  }
  return JSON.parse(atob(token.split('.')[1])) as UserModel

  }
}
