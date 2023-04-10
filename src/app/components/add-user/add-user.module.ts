import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddUserRoutingModule } from './add-user-routing.module';
import { AddUserComponent } from './add-user.component';
import { AngularMaterialModule } from "../../angular-material/angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AddUserComponent
  ],
  imports: [
    CommonModule,
    AddUserRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AddUserModule { }
