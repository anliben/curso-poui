import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  dolar: any = ''
  real: any = ''

  constructor(
    private http: HttpClient
  ){}
  ngOnInit(): void { }

  converterDolarToReal(){
    let url = 'http://economia.awesomeapi.com.br/json/last/USD-BRL';
    this.http.get(url).subscribe((response: any)  => {
      this.real = parseInt(this.dolar) * response.USDBRL.bid
    })
  }

  converterRealToDolar(){
    let url = 'http://economia.awesomeapi.com.br/json/last/BRL-USD';
    this.http.get(url).subscribe((response: any)  => {
      this.dolar = parseInt(this.real) * response.BRLUSD.bid
    })
  }

}
