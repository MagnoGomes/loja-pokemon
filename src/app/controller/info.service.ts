import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class InfoService {

  url = 'https://pokeapi.co/api/v2/pokemon/1';
  url2 = 'https://pokeapi.co/api/v2/pokemon/37';
  url3 = 'https://pokeapi.co/api/v2/pokemon/16';
  url4= 'https://pokeapi.co/api/v2/pokemon/241';

constructor() { }

pokemonInfo() {

    fetch(this.url)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          document.getElementById('poked1').innerHTML = data.name;
          let icon1 = data['sprites']['front_default'];
          document.getElementById('poked1-img').setAttribute('src', icon1);
          document.getElementById('poked1-id').innerHTML = data.id;
          document.getElementById('poked1-tipo').innerHTML = data['types']['0']['type']['name'];
          document.getElementById('poked1-peso').innerHTML = data.weight;
        })

        .catch((error) => {
          console.log('Erro!!!')
        })
    }

  pokemonInfo2() {

    fetch(this.url2)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.getElementById('poked2').innerHTML = data.name;
        let icon2 = data['sprites']['front_default'];
        document.getElementById('poked2-img').setAttribute('src',icon2);
        document.getElementById('poked2-id').innerHTML = data.id;
        document.getElementById('poked2-tipo').innerHTML = data['types']['0']['type']['name'];
        document.getElementById('poked2-peso').innerHTML = data.weight;
      })

      .catch((error) => {
        console.log('Erro!!!')
      })
  }

  pokemonInfo3() {

    fetch(this.url3)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.getElementById('poked3').innerHTML = data.name;
        let icon3 = data['sprites']['front_default'];
        document.getElementById('poked3-img').setAttribute('src',icon3);
        document.getElementById('poked3-id').innerHTML = data.id;
        document.getElementById('poked3-tipo').innerHTML = data['types']['1']['type']['name'];
        document.getElementById('poked3-peso').innerHTML = data.weight;
      })

      .catch((error) => {
        console.log('Erro!!!')
      })
  }

  pokemonInfo4() {

    fetch(this.url4)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        document.getElementById('poked4').innerHTML = data.name;
        let icon4 = data['sprites']['front_default'];
        document.getElementById('poked4-img').setAttribute('src',icon4);
        document.getElementById('poked4-id').innerHTML = data.id;
        document.getElementById('poked4-tipo').innerHTML = data['types']['1']['type']['name'];
        document.getElementById('poked4-peso').innerHTML = data.weight;
      })

      .catch((error) => {
        console.log('Erro!!!')
      })
  }

  preco: any;
    getPreco() {
      this.preco = (Math.random() * 50);
      var precoMoeda = this.preco.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
      return precoMoeda;
    }

}
