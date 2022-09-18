import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PersonasComponent } from './components/personas/personas.component';
import { CalculadoraComponent } from './components/calculadora/calculadora/calculadora.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    CalculadoraComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
