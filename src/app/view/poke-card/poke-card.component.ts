import { Component, OnInit } from '@angular/core';

import { PokeCardServiceService } from './poke-card-service.service';
import { InfoService } from './../../controller/info.service';

@Component({
  selector: 'poke-card',
  templateUrl: './poke-card.component.html',
  styleUrls: ['./poke-card.component.css']
})
export class PokeCardComponent implements OnInit {

  urlDestaque:string;
  namepoke: any;
  namepoke2: any;
  namepoke3: any;
  valor: number;

  constructor(private pokeCardServiceService: PokeCardServiceService, private infoservice: InfoService) {
    this.urlDestaque = this.pokeCardServiceService.getUrlDestaqueIcon();
    this.namepoke = this.infoservice.pokemonInfo();
    this.namepoke2 = this.infoservice.pokemonInfo2();
    this.namepoke3 = this.infoservice.pokemonInfo3();
    this.valor = this.infoservice.getPreco();
  }

  ngOnInit(): void {
  }


}

