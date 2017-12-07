import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export abstract class JobOfferService {

  getJobOffers: () => Observable<Array<any>>;
  getJobOffer: (id) => Observable<any>;
  createJobOffer: (joboffer) => Observable<any>;
  deleteJobOffer: (aggregateId) => void;
}
