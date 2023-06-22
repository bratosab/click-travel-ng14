import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DestinationFormComponent } from "./destination-form/destination-form.component";

const routes: Routes = [
    { path: '', component: DestinationFormComponent },
]

@NgModule({ 
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}