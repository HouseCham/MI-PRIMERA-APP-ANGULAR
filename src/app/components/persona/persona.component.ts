import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  titulo = "Listado de personas";
  listaPersonas: Persona[] = [
    new Persona("Ramses", "Ramirez"),
    new Persona("Julia", "Silva")
  ];
  nombreInput = '';
  apellidoInput = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  agregarPersona(){
    this.listaPersonas.push(new Persona(this.nombreInput, this.apellidoInput));
    this.nombreInput = '';
    this.apellidoInput = '';
  }

}
