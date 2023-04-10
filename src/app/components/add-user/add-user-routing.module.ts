import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from "./add-user.component";
import { HasRoleGuard } from "../../guards/has-role.guard";
import { IsAuthenticadetGuard } from "../../guards/is-authenticadet.guard";

const routes: Routes = [
  {
    path: "",
    component: AddUserComponent,
    canActivate: [IsAuthenticadetGuard, HasRoleGuard],
    data: {
      isAdmin: true
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddUserRoutingModule { }
