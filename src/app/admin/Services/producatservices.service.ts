import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Commenatire } from 'src/app/commenatire';
import { Produit } from 'src/app/produit';


@Injectable({
  providedIn: 'root'
})
export class ProducatservicesService {

  constructor(private http: HttpClient) { }
  

  ajoutercomment(cmt:Commenatire[],id: number):Observable<Commenatire[]>{
    return this.http.patch<Commenatire[]>('http://localhost:3000/Product'+'/' +id, cmt);
  }
  

  getproduitbyid(id: number): Observable<Produit> {
    return this.http.get<Produit>('http://localhost:3000/Product' +'/'+ id);
  }
  
  getProduct(): Observable<Produit[]> {
    return this.http.get<Produit[]>('http://localhost:3000/Product') .pipe(map((res:any)=>{
      return res;
    }));
  
  }

  postProducatdata(data: any){
    return this.http.post<any>('http://localhost:3000/Product', data);
  }

  getProducatdata(){
    return this.http.get<any>('http://localhost:3000/Product');
  }

  putProducatdata(data: any){
    return this.http.put<any>(`http://localhost:3000/Product`, data);
  }


  deleteProducatdata(id: number){
    return this.http.delete(`http://localhost:3000/Product/${id}`);
  }
  

}
