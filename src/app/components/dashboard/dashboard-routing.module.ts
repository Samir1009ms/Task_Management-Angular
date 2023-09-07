import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard.component";
import { IsAuthenticadetGuard } from "../../guards/is-authenticadet.guard";

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [IsAuthenticadetGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
