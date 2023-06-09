import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users-routing.module';
import { AngularMaterialModule } from "../../angular-material/angular-material.module";


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    AngularMaterialModule
  ]
})
export class UsersModule { }
