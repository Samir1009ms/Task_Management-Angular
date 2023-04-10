import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
})
export class AddUserComponent {
  roles: string[] = ['admin', 'user'];
  selectedRole: string = this.roles[1];

  constructor(private userService: UserService, private fb: FormBuilder,private router:Router) {}

  addUserForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
    isAdmin: [false, Validators.required],
  });

  submitForm() {
    if (this.addUserForm.invalid) {
      return;
    }

    this.addUserForm.controls['isAdmin'].setValue(
      this.selectedRole==='admin'? true:false
    )

    // @ts-ignore
    this.userService.addUser(this.addUserForm.value).subscribe(
      res=>{
        this.router.navigate([' /users'])
      }
    )
  }
}
