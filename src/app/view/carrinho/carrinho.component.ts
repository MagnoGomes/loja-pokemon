import { Component, OnInit } from '@angular/core';

import { InfoService } from './../../controller/info.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  namepoke: any;
  namepoke2: any;
  namepoke3: any;
  namepoke4: any;
  carrinhoLoad: any;
  headerLoad: any;

  constructor(private infoservice: InfoService) {
    this.namepoke = this.infoservice.pokemonInfo();
    this.namepoke2 = this.infoservice.pokemonInfo2();
    this.namepoke3 = this.infoservice.pokemonInfo3();
    this.namepoke4 = this.infoservice.pokemonInfo4();
    this.carrinhoLoad = this.infoservice.getCart();
    this.headerLoad = this.infoservice.getImgUrl();

  }
  ngOnInit(): void { }
}
