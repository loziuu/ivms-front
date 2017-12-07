import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export abstract class ApplicantService {

  getApplicants: () => Observable<Array<any>>;
  createApplicant: (personId, jobofferId) => Observable<any>;
  getApplicant: (id) => Observable<any>;
}
