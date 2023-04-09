import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AngularMaterialModule } from "../../angular-material/angular-material.module";
import { HasRoleDirective } from "../../directives/has-role.directive";


@NgModule({
  declarations: [
    DashboardComponent,
    HasRoleDirective
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
