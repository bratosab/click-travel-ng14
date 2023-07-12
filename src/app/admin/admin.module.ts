import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedMaterialModule } from '../shared-material/shared-material.module';
import { AddDestinationModalComponent } from './add-destination-modal/add-destination-modal.component';
import { DestinationCodeValidator } from './providers/destination-code.validator';



@NgModule({
  declarations: [
    AdminHomeComponent,
    AddDestinationModalComponent
  ],
  imports: [
    CommonModule, 
    AdminRoutingModule,
    ReactiveFormsModule,
    SharedMaterialModule
  ], 
  providers: [DestinationCodeValidator]
})
export class AdminModule { }
