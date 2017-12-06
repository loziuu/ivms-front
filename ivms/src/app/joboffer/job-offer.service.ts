import { Injectable } from '@angular/core';

@Injectable()
export class JobOfferService {

  constructor() { }

  getVehicles(): Array<any> {
    return [  { "name": "Java Developer", "position":"JAVA DEVELOPER", "description": "Best work in tha world dude" },
              { "name":"Frontend Developer", "position": "CEO", "description": "Don't come here. You are going to hate it. #THYMELEAF" },
              { "name":"Student", "position": "STUDENT", "description": "Get some experience, young blood." },
              { "name":"Tester", "position": "JAVA DEVELOPER", "description": "Test our shit, because we can't add another layer of abstraction." },
              { "name":"Senior Architecture", "position": "JAVA SENIOR DEVELOPER", "description": "First serious job offer here... jk." },
              { "name":"Junior Senior Architect", "position": "SUICIDE SQUAD", "description": "Abstract Junior Front Office Contractor Factory Bean" },
              
            ]
  }
}
