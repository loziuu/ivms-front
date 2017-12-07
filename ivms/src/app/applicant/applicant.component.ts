import { Component, OnInit } from '@angular/core';
import { ApplicantService } from "@app/applicant/applicant.service";

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {

  applicants: Array<any>

  constructor(private service: ApplicantService) { }

  ngOnInit() {
    this.service.getApplicants().subscribe(result => {
      this.applicants = result;
      console.log(this.applicants);
    });
  }
}
