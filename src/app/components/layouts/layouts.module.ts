import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { NavigationComponent } from "../navigation/navigation.component";
import { AngularMaterialModule } from "../../angular-material/angular-material.module";


@NgModule({
  declarations: [
    LayoutsComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    AngularMaterialModule
  ]
})
export class LayoutsModule { }
