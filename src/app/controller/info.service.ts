import { Injectable } from '@angular/core';

import * as $ from 'jquery';
import * as _ from 'underscore';
@Injectable({
  providedIn: 'root'
})

export class InfoService {

  url = 'https://pokeapi.co/api/v2/pokemon/1';
  url2 = 'https://pokeapi.co/api/v2/pokemon/37';
  url3 = 'https://pokeapi.co/api/v2/pokemon/16';
  url4= 'https://pokeapi.co/api/v2/pokemon/241';
  iconUrl= 'https://image.flaticon.com/icons/svg/188/188948.svg';

constructor() { }

getImgUrl(){
  return this.iconUrl;
}

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
      //remover depois
    }

getCart() {
    var cart = [];
    var products = [{ name: "Bulbasaur", price: 425 }, { name: "Vulpix", price: 225 }, { name: "Pidgey", price: 625 },
    { name: "Miltank", price: 1025 }];
    function refreshProducts() {
      for (var i = 0; i < cart.length; i++) {
        $("#prod" + (cart[i].index + 1)).prop('disabled', true);
        $("#prod" + (cart[i].index + 1)).text('NO CARRINHO');
      }
    }
    function retrieve() {
      cart = JSON.parse(localStorage.getItem('cart') ? localStorage.getItem('cart') : '[]');
    }
    function refreshCart() {
      $('#cartEntry').html('');
      var sum = 0;
      for (var i = 0; i < cart.length; i++) {
        sum += cart[i].price;
        var remove = $('<span class="remove">Remover</span>')
        remove.attr("remove-id", i);
        remove.attr("product-id", cart[i].index);
        var decrease = $('<span class="decrease">-</span>')
        decrease.attr("decrease-id", i);
        decrease.attr("product-id", cart[i].index);
        var increase = $('<span class="increase">+</span>')
        increase.attr("increase-id", i);
        increase.attr("product-id", cart[i].index);
        var price = $('</td>' + '<td>' + cart[i].price + '</td>');
        var product = $('<td>' + cart[i].name + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</td>');
        product.append(remove);
        var quantity = $('<td>&nbsp;&nbsp;&nbsp;' + cart[i].qty + '&nbsp;&nbsp;&nbsp;</td>');
        quantity.prepend(decrease);
        quantity.append(increase);
        var row = $('<tr></tr>');
        row.append(product);
        row.append(quantity);
        row.append(price);
        $('#cartEntry').append(row);
      }
      $('#totalPrice').text(sum);
      $(".decrease").click(function () {
        var cartPos = $(this).attr('decrease-id');
        var productPos = $(this).attr('product-id');
        var presentQty = cart[cartPos].qty;
        var basePrice = products[productPos].price;
        if (presentQty != 1) {
          cart[cartPos].qty = cart[cartPos].qty - 1;
          cart[cartPos].price = cart[cartPos].qty * basePrice;
        }
        saveCart();
        refreshCart();
      });
      $(".increase").click(function () {
        var cartPos = $(this).attr('increase-id');
        var productPos = $(this).attr('product-id');
        var presentQty = cart[cartPos].qty;
        var basePrice = products[productPos].price;
        if (presentQty < 5) {
          cart[cartPos].qty = cart[cartPos].qty + 1;
          cart[cartPos].price = cart[cartPos].qty * basePrice;
        }
        saveCart();
        refreshCart();
      });
      $(".remove").click(function () {
        var id = $(this).attr('remove-id');
        var index = parseInt($(this).attr('product-id'));
        var enableProduct = index + 1;
        $("#prod" + enableProduct).prop('disabled', false);
        $("#prod" + enableProduct).text('COMPRAR');
        cart.splice(id, 1);
        saveCart();
        refreshCart();
        refreshProducts()
      })
    }
    //saving the changes in the cart
    function saveCart() {
      localStorage.setItem('cart', JSON.stringify(cart));
    }
    $(function () {
      retrieve();
      refreshProducts();
      refreshCart();
      $('button').click(function () {
        var id = $(this)[0].id;
        var index = id[id.length - 1] - 1;
        var details = products[index];
        cart.push({
          index: index,
          name: details.name,
          qty: 1,
          price: details.price
        });
        refreshCart();
        refreshProducts();
        saveCart();
      });
    });
  }
}
