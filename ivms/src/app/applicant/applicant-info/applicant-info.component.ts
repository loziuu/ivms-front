import { Component, OnInit } from '@angular/core';
import { ApplicantService } from "@app/applicant/applicant.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-applicant-info',
  templateUrl: './applicant-info.component.html',
  styleUrls: ['./applicant-info.component.css']
})
export class ApplicantInfoComponent implements OnInit {

  applicant: any;

  constructor(private route: ActivatedRoute, private service: ApplicantService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => this.service.getApplicant(params.get('id')).subscribe(result => this.applicant = result));
  }
}
