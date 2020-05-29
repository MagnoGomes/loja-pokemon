import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeCardServiceService {


  constructor() {

  }

  getUrlDestaqueIcon() {
    return 'https://image.flaticon.com/icons/svg/188/188931.svg';
  }
  getUrlMenuIcon() {
    return 'https://image.flaticon.com/icons/svg/1752/1752822.svg';
  }
}
