import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from "./layouts.component";
import { IsAuthenticadetGuard } from "../../guards/is-authenticadet.guard";

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    canActivate: [IsAuthenticadetGuard],

    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'users',
        loadChildren: () => import('../users/users.module').then(m => m.UsersModule)
      },
      {
        path: "add-user",
        loadChildren: () => import("../add-user/add-user.module").then(m => m.AddUserModule)
      },
      {
        path: "tasks",
        loadChildren: () => import("../tasks/tasks.module").then(m => m.TasksModule)
      },
      {
        path: "add-task",
        loadChildren: () => import("../add-task/add-task.module").then(m => m.AddTaskModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
