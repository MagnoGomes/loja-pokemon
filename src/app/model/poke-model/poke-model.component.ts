import { Component, OnInit } from '@angular/core';

import { InfoService } from './../../controller/info.service';


@Component({
  selector: 'app-poke-model',
  templateUrl: './poke-model.component.html',
  styleUrls: ['./poke-model.component.css']
})
export class PokeModelComponent implements OnInit {

  namepoke: any;
  namepoke2: any;
  namepoke3: any;
  namepoke4: any;

  constructor(private pokeCharge: InfoService) {

    this.namepoke = this.pokeCharge.pokemonInfo();
    this.namepoke2 = this.pokeCharge.pokemonInfo2();
    this.namepoke3 = this.pokeCharge.pokemonInfo3();
    this.namepoke4 = this.pokeCharge.pokemonInfo4();

   }

  ngOnInit(): void {
  }

}

/*constructor(private pokeCardServiceService: PokeCardServiceService, private infoservice: InfoService) {
  this.urlDestaque = this.pokeCardServiceService.getUrlDestaqueIcon();
  this.namepoke = this.infoservice.pokemonInfo();
  this.namepoke2 = this.infoservice.pokemonInfo2();
  this.namepoke3 = this.infoservice.pokemonInfo3();
  this.valor = this.infoservice.getPreco();
  */
