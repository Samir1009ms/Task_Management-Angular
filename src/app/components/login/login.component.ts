import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form = new FormGroup({
    email:new FormControl(null,Validators.required),
    password:new FormControl(null,Validators.required)
  })
  constructor(private authService:AuthService,private router : Router) {
  }

  submitForm(){

    if(this.form.invalid){
      return ;
    }
    // @ts-ignore
    this.authService.login(this.form.get('email')?.value,this.form.get('password')?.value).subscribe(
     res=>{
       this.router.navigate(['/dashboard'])
     }
    )
  }

}
