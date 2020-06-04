import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PokeModelComponent } from './../model/poke-model/poke-model.component';
import { PokeCardComponent } from './../view/poke-card/poke-card.component';


const APP_ROUTES: Routes = [
  { path: '', component: PokeCardComponent },
  { path: 'pokemon', component: PokeModelComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
