import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  private baseUrl = 'https://task-management-backend-eight.vercel.app/api'

  login(email: string,password : string){
    return this.http.post(`${this.baseUrl}/login`,{email,password},{responseType : 'text'})
  }
}
