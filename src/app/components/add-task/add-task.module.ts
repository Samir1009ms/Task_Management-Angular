import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddTaskRoutingModule } from './add-task-routing.module';
import { AddTaskComponent } from './add-task.component';
import { AngularMaterialModule } from "../../angular-material/angular-material.module";
import { ReactiveFormsModule } from "@angular/forms";


@NgModule({
  declarations: [
    AddTaskComponent
  ],
  imports: [
    CommonModule,
    AddTaskRoutingModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ]
})
export class AddTaskModule { }
