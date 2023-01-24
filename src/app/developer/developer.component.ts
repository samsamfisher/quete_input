import { Component } from '@angular/core';
import { Developer } from '../models/developer.model';
import { Skill } from '../models/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.scss']
})
export class DeveloperComponent {

  data: Developer = new Developer("Fisher", "Sam", 43, "undefined", "secret defense", [new Skill('Fisher', 'Echelon 3', 'pentagone.us')]);

}
