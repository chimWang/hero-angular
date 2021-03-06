import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DayroomServiceService {
  private dayroomUrl = 'http://localhost:3000/menus'
  private goodsUrl = 'http://localhost:3000/goods'
  message=0
  constructor(
    private http: HttpClient
  ) { }

  getMenu(): Observable<any[]> {
    return this.http.get<any[]>(this.dayroomUrl + '/getMenu').pipe()
  }

  getGoods(): Observable<any[]> {
    return this.http.get<any[]>(this.goodsUrl + '/getGoods').pipe()
  }

  getGoodsByType(type): Observable<any[]> {
    return this.http.post<any[]>(this.goodsUrl + '/getGoodsByType', { type: type }).pipe()
  }

  getGoodDetail(id: string): Observable<any[]> {
    return this.http.post<any[]>(this.goodsUrl + '/getGoodDetail', { id: id }).pipe()
  }

  intoBag(goods): Observable<any[]> {
    // return this.http.get<any[]>(this.goodsUrl + '/getGoods').pipe(
      
    // )
    return this.http.post<any[]>(this.goodsUrl + '/intoBag', goods).pipe(
      tap(()=>this.message++)
    )
  }

  getBag(): Observable<any[]> {
    return this.http.get<any[]>(this.goodsUrl + '/getBags').pipe(
    )
  }

  getMessage(){
    return this.message
  }
}
