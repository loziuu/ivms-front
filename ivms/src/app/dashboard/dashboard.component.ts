import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  interviews: Array<any>;

  constructor() { }

  ngOnInit() {
    this.interviews = [ { "date":"2017-01-01", "applicant":"Jan Kowalski", "jobOffer": "Java Developer"} ];
  }
}
