import { ProdutoComponent } from './produto/produto.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarrosselComponent } from './carrossel/carrossel.component';

@NgModule({
  /*declarations servem para registrar, components, pipes, diretivas e outras estruturas.*/
  declarations: [
    AppComponent,
    ProdutoComponent,
    CarrosselComponent
  ],
  /*Imports servem para registrar outros módulos dentro de outro módulo.
  EXCLUSIVAMENTE PARA OUTROS MÓDULOS*/
  imports: [
    BrowserModule
  ],
  /*Providers servem para registrar serviços e interceptadores HTTP*/
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
