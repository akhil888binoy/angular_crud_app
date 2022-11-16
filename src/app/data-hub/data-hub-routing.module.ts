import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from '../DataHub/home/home.component';
import {AboutComponent} from '../DataHub/about/about.component';
import { ContactsComponent } from '../DataHub/contacts/contacts.component';
import { CreateComponent } from '../DataHub/create/create.component';
import { ResumeComponent } from '../DataHub/resume/resume.component';

const routes: Routes = [
  {
    path: "Datahub/home", component: HomeComponent
  },
  {
    path: "Datahub/about", component: AboutComponent
  },
  {
    path: "Datahub/create", component: CreateComponent
  },
  {
    path: "Datahub/resume", component: ResumeComponent
  },
  {
    path: "Datahub/contacts", component: ContactsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataHubRoutingModule { }
