import { Injectable } from '@angular/core';
import { ApplicantService } from "@app/applicant/applicant.service";
import { Observable } from "rxjs/Observable";
import { JobOfferService } from "@app/joboffer/job-offer.service";
import { PersonService } from "@app/person/person.service";

@Injectable()
export class StubApplicantService implements ApplicantService {

  private applicants: Array<any>;

  constructor(private jobService: JobOfferService, private personService: PersonService) {
    this.applicants = [];
  }

  getApplicants() : Observable<Array<any>> {
    return Observable.of(this.applicants);
  }

  getApplicant(id) : Observable<any> {
    return Observable.of(this.applicants.find(entry => entry["aggregateId"] == id))
  }

  createApplicant(personId, jobofferId) : Observable<any> {
    var applicant = { aggregateId: this.applicants.length+1, joboffer: "", person: ""};

    this.jobService.getJobOffer(jobofferId).subscribe(joboffer => {
      this.personService.getPerson(personId).subscribe(person => applicant.person = person);
      applicant.joboffer = joboffer;
      this.applicants.push(applicant);
    })

    return Observable.of();
  }
}
