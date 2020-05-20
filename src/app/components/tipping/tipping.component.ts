import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tipping',
  templateUrl: './tipping.component.html',
  styleUrls: ['./tipping.component.css']
})
export class TippingComponent implements OnInit {


  tipPercentage = 0.99;
  billAmount = 0;
  tipAmount = 0;
  totalAmount = 0;


  constructor() { }

  ngOnInit(): void {
  }

  setTipPercentage(amount: number) {
    this.tipPercentage = amount;
    this.calculate(this.billAmount);
  }

  calculate(amount: number) {

    this.billAmount = amount;
    this.tipAmount = this.billAmount * this.tipPercentage;
    this.totalAmount = this.billAmount + this.tipAmount;
  }

}
