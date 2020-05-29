import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  url = 'https://pokeapi.co/api/v2/pokemon/19';
  meumetodo(){


    fetch(this.url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
         //o que fazer com os dados do json
        console.clear();
        console.log(data);
        document.getElementById('poked1').innerHTML = data.name;

      })

      .catch((error) =>{
        console.log('Erro!!!')
      })
  }

  constructor() { }

  ngOnInit(): void {
  }

}
