import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { JobOfferService } from "@app/joboffer/job-offer.service";
import { ApplicantService } from "@app/applicant/applicant.service";

@Component({
  selector: 'app-applicant-create',
  templateUrl: './applicant-create.component.html',
  styleUrls: ['./applicant-create.component.css']
})
export class ApplicantCreateComponent implements OnInit {

  jobs: Array<any>;
  chosenJob : any;

  constructor(private route: ActivatedRoute, private service: JobOfferService, private applicantService: ApplicantService) { 
  }

  ngOnInit() {
    this.service.getJobOffers().subscribe(result => this.jobs = result);
  }  

  submit() {
    this.route.paramMap.subscribe(params => { 
      this.applicantService.createApplicant(params.get("id"), this.chosenJob["aggregateId"]);
    });
  }
}
