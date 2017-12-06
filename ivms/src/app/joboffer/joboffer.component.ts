import { Component, OnInit } from '@angular/core';
import { JobOfferService } from './job-offer.service';

@Component({
  selector: 'app-joboffer',
  templateUrl: './joboffer.component.html',
  styleUrls: ['./joboffer.component.css'],
  providers: [JobOfferService]
})
export class JobofferComponent implements OnInit {

  jobs: Array<any>;

  constructor(private service : JobOfferService) { }

  ngOnInit() {
    this.getJobs();
  }

  private getJobs() {
    this.jobs = this.service.getVehicles();
  }
}
