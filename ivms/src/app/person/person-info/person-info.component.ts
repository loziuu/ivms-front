import { Component, OnInit } from '@angular/core';
import { PersonService } from "@app/person/person.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.css']
})
export class PersonInfoComponent implements OnInit {

  person: any;

  constructor(private service: PersonService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(
      param => this.service.getPerson(param.get('id')).subscribe(
        result => this.person = result));
  }
}
