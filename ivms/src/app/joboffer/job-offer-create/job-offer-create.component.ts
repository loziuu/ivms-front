import { Component, OnInit } from '@angular/core';
import { NgModel } from '@angular/forms';
import { JobOfferService } from "@app/joboffer/job-offer.service";
import { StubJobOfferService } from "@app/joboffer/stub-job-offer.service";
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-job-offer-create',
  templateUrl: './job-offer-create.component.html',
  styleUrls: ['./job-offer-create.component.css']
})
export class JobOfferCreateComponent implements OnInit {

  joboffer: any;
  isSuccessful: boolean;
  isFailure: boolean;

  constructor(private service: JobOfferService) { 
  }

  ngOnInit() {
    this.joboffer = {};
  }

  submit() {
    var response;
    this.service.createJobOffer(this.joboffer)
      .subscribe(result => {
        if (result)
          this.success();
        else 
          this.failure();
      });
  }

  success() {
    this.isFailure = false;
    this.isSuccessful = true;
    this.joboffer = {};
  }

  failure() {
    this.isSuccessful = false;
    this.isFailure = true;
  }
}
