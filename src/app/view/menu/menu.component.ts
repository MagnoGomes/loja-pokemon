import { PokeCardServiceService } from './../poke-card/poke-card-service.service';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'poke-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  pokeStoreIcon: string;

  constructor(private pokeMenu: PokeCardServiceService) {
  this.pokeStoreIcon = this.pokeMenu.getUrlMenuIcon();

  }

  ngOnInit(): void {}

}
