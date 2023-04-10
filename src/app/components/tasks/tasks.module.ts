import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { AngularMaterialModule } from "../../angular-material/angular-material.module";


@NgModule({
  declarations: [
    TasksComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    AngularMaterialModule

  ]
})
export class TasksModule { }
