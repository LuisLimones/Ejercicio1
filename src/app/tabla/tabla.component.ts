import { Component, OnInit, Input } from '@angular/core';
import { Persona } from "../clases/persona";

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  @Input() personas:Persona[];

  constructor() { }

  ngOnInit() {
  }

}
