import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsComponent } from './layouts.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
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
