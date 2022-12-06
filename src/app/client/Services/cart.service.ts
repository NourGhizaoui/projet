import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Produit } from 'src/app/produit';


@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  public productList = new BehaviorSubject<Produit[]>([]);
  public search = new BehaviorSubject<string>("");
  public cartItemList : any =[]

  postCart(data: any) {
    return this.http.post<any>('http://localhost:3000/Cart', data);
  }

  getCart() {
    return this.http.get<any>('http://localhost:3000/Cart');
  }

  putCart(data: any, id: number) {
    return this.http.put<any>(`http://localhost:3000/Cart/${id}`, data);
  }

  deleteCart(id: number) {
    return this.http.delete<any>(`http://localhost:3000/Cart/${id}`);
  }
  addtoCart(product : any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList)
  }
  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.total;
    })
    return grandTotal;
  }
}
