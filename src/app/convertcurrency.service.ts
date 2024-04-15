import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class convertCurrency {
  private apiKey = 'sua_chave_de_api';
  private apiUrl = 'https://api.exchangerate-api.com/v4/latest/USD'; // Moeda base USD

  constructor(private http: HttpClient) { }

  getExchangeRates(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}