import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DestinationFormComponent } from './destination-form/destination-form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DestinationFormComponent
  ],
  imports: [
    CommonModule, 
    SharedMaterialModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
