import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export abstract class PersonService {

  getPeople: () => Observable<Array<any>>;
  getPerson: (id) => Observable<any>;
}
