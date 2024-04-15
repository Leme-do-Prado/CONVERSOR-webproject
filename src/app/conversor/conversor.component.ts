import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent implements OnInit {
  inputValue: number = 0;
  convertedValue: number = 0.0000;
  valorConvertido: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  converterParaDolar() {
    // Supondo uma taxa de câmbio de 5.50 (R$1 = $5.50)
    const taxaDeCambio = 5.178846;
    this.convertedValue = this.inputValue / taxaDeCambio;
  }

}
