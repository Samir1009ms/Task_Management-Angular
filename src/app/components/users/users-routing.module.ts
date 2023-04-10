import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from "./users.component";
import { IsAuthenticadetGuard } from "../../guards/is-authenticadet.guard";
import { HasRoleGuard } from "../../guards/has-role.guard";

const routes: Routes = [
  {
    path:'',
  component:UsersComponent,
    canActivate:[IsAuthenticadetGuard,HasRoleGuard],
    data : {
        isAdmin:true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
