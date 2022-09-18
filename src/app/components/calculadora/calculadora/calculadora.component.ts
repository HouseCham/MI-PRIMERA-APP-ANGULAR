import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  public sumando1: number = 0;
  public sumando2: number = 0;
  public resultado: number = 0;
  
  ngOnInit(): void {}

  sumarValores():void{
    this.resultado = this.sumando1 + this.sumando2;
  }

}
