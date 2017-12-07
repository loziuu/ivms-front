import { Component, OnInit, Input } from '@angular/core';
import { JobOfferService } from "@app/joboffer/job-offer.service";
import { StubJobOfferService } from "@app/joboffer/stub-job-offer.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-joboffer-info',
  templateUrl: './joboffer-info.component.html',
  styleUrls: ['./joboffer-info.component.css']
})
export class JobofferInfoComponent implements OnInit {

  joboffer: any;

  constructor(private service: JobOfferService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => this.service.getJobOffer(param.get('id')).subscribe(
        job => this.joboffer = job));
  }
}
