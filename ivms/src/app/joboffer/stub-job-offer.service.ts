import { Injectable } from '@angular/core';
import { JobOfferService } from "@app/joboffer/job-offer.service";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';

@Injectable()
export class StubJobOfferService implements JobOfferService {

  jobs: Array<any>;

  constructor() { 
    console.log("Create stub job offer");
    this.jobs = [
      {"aggregateId":"1", "name": "Java Developer", "position":"JAVA DEVELOPER", "description": "Best work in tha world dude" },
      {"aggregateId":"2", "name":"Frontend Developer", "position": "CEO", "description": "Don't come here. You are going to hate it. #THYMELEAF" },
      {"aggregateId":"3", "name":"Student", "position": "STUDENT", "description": "Get some experience, young blood." },
      {"aggregateId":"4", "name":"Tester", "position": "JAVA DEVELOPER", "description": "Test our shit, because we can't add another layer of abstraction." },
      {"aggregateId":"5", "name":"Senior Architecture", "position": "JAVA SENIOR DEVELOPER", "description": "First serious job offer here... jk." },
      {"aggregateId":"6", "name":"Junior Senior Architect", "position": "SUICIDE SQUAD", "description": "Abstract Junior Front Office Contractor Factory Bean" }];

    }

  getJobOffers(): Observable<Array<any>> {
    return Observable.of(this.jobs);
  }

  getJobOffer(id): Observable<any> {
    return Observable.of(this.jobs.find(entry => entry["aggregateId"] == id));
  }

  createJobOffer(joboffer): Observable<any> {
    if (joboffer["name"] == undefined)
      return Observable.of(null);  
    joboffer["aggregateId"] = this.jobs.length+1;
    this.jobs.push(joboffer);
    return Observable.of({ joboffer });
  }

  deleteJobOffer(aggregateId) {
    this.jobs = this.jobs.filter(entry => entry["aggregateId"] != aggregateId);
    console.log(this.jobs);
  }
}
