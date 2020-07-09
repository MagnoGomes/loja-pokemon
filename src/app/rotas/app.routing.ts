import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarrinhoComponent } from './../view/carrinho/carrinho.component';
import { PokeCardComponent } from './../view/poke-card/poke-card.component';


const APP_ROUTES: Routes = [
  { path: '', component: PokeCardComponent },
  { path: 'pokemon', component: CarrinhoComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
