import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing } from './rotas/app.routing';

import {MatDialogModule} from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MenuComponent } from './view/menu/menu.component';
import { PrincipalComponent } from './view/principal/principal.component';
import { PokeCardComponent } from './view/poke-card/poke-card.component';
import { PokeCardServiceService } from './view/poke-card/poke-card-service.service';
import { InfoService } from './controller/info.service';
import { CarrinhoComponent } from './view/carrinho/carrinho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModalComponent } from './view/dialog-modal/dialog-modal.component';


@NgModule({
  declarations: [
    MenuComponent,
    PrincipalComponent,
    PokeCardComponent,
    CarrinhoComponent,
    DialogModalComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [ PokeCardServiceService,
               InfoService, InfoService],

  bootstrap: [ PrincipalComponent ]
})
export class AppModule { }
