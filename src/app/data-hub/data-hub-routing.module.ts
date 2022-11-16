import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../DataHub/home/home.component';

const routes: Routes = [
  {
    path: "Datahub/home", component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataHubRoutingModule { }
