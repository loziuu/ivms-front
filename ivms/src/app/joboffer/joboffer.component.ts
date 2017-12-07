import { Component, OnInit } from '@angular/core';
import { JobOfferService } from './job-offer.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-joboffer',
  templateUrl: './joboffer.component.html',
  styleUrls: ['./joboffer.component.css']
})
export class JobofferComponent implements OnInit {

  jobs: Array<any>;

  constructor(private service: JobOfferService) { }

  ngOnInit() {
    this.getJobs();
  }

  private getJobs() {
    this.service.getJobOffers().subscribe(result => this.jobs = result);
  }
}
