import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/user.service";
import { UserModel } from "../../models/user.model";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit{
users:UserModel[]=[]
  constructor(private userServices:UserService) {
  }

  ngOnInit() {
  this.getUSers()
  }
  displayedColumns: string[] = ['_id', 'name', 'email', 'isAdmin']
  getUSers(){
    this.userServices.getUsers().subscribe(res=>{
      this.users=res
    })
  }
}
