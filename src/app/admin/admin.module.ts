import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminContainerComponent } from './admin-container/admin-container.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminContainerComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
