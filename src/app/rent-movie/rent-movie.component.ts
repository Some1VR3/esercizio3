import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rent-movie',
  templateUrl: './rent-movie.component.html',
  styleUrls: ['./rent-movie.component.css']
})
export class RentMovieComponent implements OnInit {
title: string = 'Noleggia un film'
title2: string = 'Ottieni il prezzo in USD'
quantity: number = 0;
price: number = 14.99;
discount: number = 20;
valore: number = 0;
total: number = 0;
totalUSD: number = 0;
dollars: number = 0;
  constructor() { }
calculate(q: any){
  let subtotal = q * this.price
  let totaldiscount =  subtotal * 20 / 100
  this.total = subtotal - totaldiscount;
}

convertCurrency(value){
  
  this.totalUSD = value * 1.22

}
  ngOnInit(): void {
  }

}
