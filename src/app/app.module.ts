import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './rotas/app.routing';

import { MenuComponent } from './view/menu/menu.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { PokeCardComponent } from './view/poke-card/poke-card.component';
import { PokeCardServiceService } from './view/poke-card/poke-card-service.service';
import { InfoService } from './controller/info.service';
import { CarrinhoComponent } from './view/carrinho/carrinho.component';


@NgModule({
  declarations: [
    MenuComponent,
    PrincipalComponent,
    PokeCardComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [ PokeCardServiceService,
               InfoService, InfoService],

  bootstrap: [ PrincipalComponent ]
})
export class AppModule { }
