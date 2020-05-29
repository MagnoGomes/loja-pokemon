import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MenuComponent } from './view/menu/menu.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { PokeCardComponent } from './view/poke-card/poke-card.component';
import { PokeCardServiceService } from './view/poke-card/poke-card-service.service';
import { InfoService } from './controller/info.service';

@NgModule({
  declarations: [
    MenuComponent,
    PrincipalComponent,
    PokeCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ PokeCardServiceService,
               InfoService, InfoService],

  bootstrap: [ PrincipalComponent ]
})
export class AppModule { }
