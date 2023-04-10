import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsAuthenticadetGuard } from "../../guards/is-authenticadet.guard";
import { HasRoleGuard } from "../../guards/has-role.guard";
import { TasksComponent } from "./tasks.component";

const routes: Routes = [
  {
    path:'',
    component:TasksComponent,
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
export class TasksRoutingModule { }
