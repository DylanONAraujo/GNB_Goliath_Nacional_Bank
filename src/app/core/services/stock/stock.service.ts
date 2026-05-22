import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StockCard } from '../../model/StockCard';


@Injectable({
  providedIn: 'root'
})
export class StockService {

  private apiUrl = 'http://localhost:3002/stockgnb';

  constructor(private http: HttpClient) {   }

    getStock(): Observable <any>{
      return this.http.get<StockCard[]>(this.apiUrl);
    }

}
