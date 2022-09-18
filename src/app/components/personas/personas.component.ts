import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  nombre: string = 'Ramses';
  apellido: string = 'Ramirez';
  edad: number = 22;

  deshabilitar = false;
  mensaje = 'No se ha agregado ninguna persona';
  titulo = 'Hola corazon como estas';
  mostrar = false;

  ngOnInit(): void {
    
  }

  public agregarPersona(){
    this.mensaje = 'Persona agregada';
    this.mostrar = true;
  }

  
  modificarTitulo(event: Event){
    this.titulo = (<HTMLInputElement>event.target).value;
  }
}
