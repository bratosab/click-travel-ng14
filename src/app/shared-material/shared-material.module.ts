import { NgModule } from '@angular/core';

import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

const MaterialModules = [MatButtonModule, MatButtonToggleModule];

@NgModule({
  imports: [...MaterialModules],
  exports: [...MaterialModules]
})
export class SharedMaterialModule { }
