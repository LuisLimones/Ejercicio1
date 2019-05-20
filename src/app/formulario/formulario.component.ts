import { Component, OnInit } from '@angular/core';
import { Persona } from "../clases/persona";


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }
  persona:Persona={
    nombre: null,
    apellidoP: null,
    apellidoM: null,
    sexo: null,
    edad: null,
    correo: null,
    icono: null
  };
  iconos:string[]=["cog","archive","check","folder","flag","hourglass","male","music","paste","plug"];
  persona1:Persona;
  random: number;
  personas:Persona[]=[];

  ngOnInit() {
  }

  clickAgregar():void{
    this.hacerRandom();
    this.persona.icono=this.iconos[this.random-1];
    this.persona1=new Persona();
    this.persona1.nombre=this.persona.nombre;
    this.persona1.apellidoP=this.persona.apellidoP;
    this.persona1.apellidoM=this.persona.apellidoM;
    this.persona1.sexo=this.persona.sexo;
    this.persona1.edad=this.persona.edad;
    this.persona1.correo=this.persona.correo;
    this.persona1.icono=this.persona.icono;
    this.personas.push(this.persona1);
  }
  hacerRandom(){
    this.random=Math.floor(((Math.random()*10))+1);
  }

}
