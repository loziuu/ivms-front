import { Injectable } from '@angular/core';
import { PersonService } from "@app/person/person.service";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/observable/of';
  
@Injectable()
export class StubPersonService implements PersonService {
  
    people: Array<any>;

    constructor() {
      this.people = [ 
              {"aggregateId":"1", "firstName": "Adam", "lastName": "Małysz", "email":"skoczekwszechczasow@polska.pl", "phone":"523451234", "status":"CREATED"},
              {"aggregateId":"2", "firstName": "Jan", "lastName": "Wspaniały", "email":"gladiator42@gmail.com", "phone":"611222333", "status":"REJECTED?"},
              {"aggregateId":"3", "firstName": "Władysław", "lastName": "Łokietek", "email":"sredniowiecze@krol.pl", "phone":"540675473", "status":"APPLYING"},
              {"aggregateId":"4", "firstName": "Zygmunt", "lastName": "Zdobywca", "email":"DragonHunterSniper69@buziaczek.pl", "phone":"924324567", "status":"APPLYING"},
              {"aggregateId":"5", "firstName": "Maja", "lastName": "Zofia", "email":"legenda@gmail.com", "phone":"997998999", "status":"HIRED"}];
    }

    public getPeople(): Observable<Array<any>> {
      return Observable.of(this.people);
    }

    public getPerson(id): Observable<any> {
      return Observable.of(this.people.find(entry => entry["aggregateId"] == id));
    }
}
