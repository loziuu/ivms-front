import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { JobofferComponent } from './joboffer/joboffer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PersonComponent } from "./person/person.component";
import { JobOfferCreateComponent } from "./joboffer/job-offer-create/job-offer-create.component";
import { JobOfferService } from "app/joboffer/job-offer.service";
import { StubJobOfferService } from "app/joboffer/stub-job-offer.service";
import { FormsModule } from "@angular/forms";
import { ApplicantCreateComponent } from "@app/applicant/applicant-create/applicant-create.component";
import { PersonService } from "@app/person/person.service";
import { StubPersonService } from "@app/person/stub-person-service.service";
import { ApplicantService } from "@app/applicant/applicant.service";
import { StubApplicantService } from "@app/applicant/stub-applicant.service";
import { ApplicantComponent } from "@app/applicant/applicant.component";
import { ApplicantInfoComponent } from './applicant/applicant-info/applicant-info.component';
import { PersonInfoComponent } from "@app/person/person-info/person-info.component";

@NgModule({
  declarations: [
    AppComponent,
    JobofferComponent,
    JobOfferCreateComponent,
    DashboardComponent,
    PersonComponent,
    ApplicantCreateComponent,
    ApplicantComponent,
    ApplicantInfoComponent,
    PersonInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
        path: 'people/:id',
        component: PersonInfoComponent
      },
      {
        path: 'jobs/create',
        component: JobOfferCreateComponent
      },
      {
        path: 'people/:id/apply',
        component: ApplicantCreateComponent
      },
      {
        path: 'applicants',
        component: ApplicantComponent
      },
      {
        path: 'applicants/:id',
        component: ApplicantInfoComponent
      }
    ]),
  ],
  providers: [ { provide: JobOfferService, useClass: StubJobOfferService },
                { provide: PersonService, useClass: StubPersonService }, 
              { provide: ApplicantService, useClass: StubApplicantService }],
  bootstrap: [AppComponent]
})
export class AppModule { }
