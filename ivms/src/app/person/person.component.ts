import { Component, OnInit } from '@angular/core';
import { PersonService } from '@app/person/person.service';
import { StubPersonService } from "@app/person/stub-person-service.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers: [{ provide: PersonService, useClass: StubPersonService} ]
})
export class PersonComponent implements OnInit {

  people: Array<any>;

  constructor(private service: PersonService) { }

  ngOnInit() {
      this.service.getPeople().subscribe(peopleData => this.people = peopleData);
  }
}
