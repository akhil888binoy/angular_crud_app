import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DataHubModule} from './data-hub/data-hub.module';
import { HomeComponent } from './DataHub/home/home.component';
import { CreateComponent } from './DataHub/create/create.component';
import { EditComponent } from './DataHub/edit/edit.component';
import { AboutComponent } from './DataHub/about/about.component';
import { ResumeComponent } from './DataHub/resume/resume.component';
import { ContactsComponent } from './DataHub/contacts/contacts.component';
import  { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    EditComponent,
    AboutComponent,
    ResumeComponent,
    ContactsComponent
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataHubModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
