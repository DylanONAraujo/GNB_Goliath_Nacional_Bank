import { Component, OnInit } from '@angular/core';
import { ChartPoint } from 'src/app/core/model/ChartPoint';
import { StockCard } from 'src/app/core/model/StockCard';
import { StockService } from 'src/app/core/services/stock/stock.service';

@Component({
  selector: 'vex-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
stocks: StockCard[] = []; // Backend das ações

 
  ngOnInit() {
  }

  constructor(private stockApi: StockService) {
    this.stockApi.getStock().subscribe({
      next: response => {
        if(response != null){
          this.stocks = response
        }
      },
      error: err => console.log('Falha ao buscar as ações', err)
    });
   }

}
