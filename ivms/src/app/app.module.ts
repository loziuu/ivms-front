import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobofferComponent } from './joboffer/joboffer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from "./person/person.component";
import { JobOfferCreateComponent } from "./joboffer/job-offer-create/job-offer-create.component";

@NgModule({
  declarations: [
    AppComponent,
    JobofferComponent,
    JobOfferCreateComponent,
    DashboardComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'index',
        component: DashboardComponent,
      },
      {
        path: '',
        redirectTo: 'index',
        pathMatch: 'full'
      },
      {
        path: 'jobs',
        component: JobofferComponent
      },
      {
        path: 'people',
        component: PersonComponent
      },
      {
        path: 'jobs/create',
        component: JobOfferCreateComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
