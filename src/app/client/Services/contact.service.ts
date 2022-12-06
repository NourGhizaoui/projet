import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/contact';
const url="http://localhost:3000/contact";
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http:HttpClient) { }

  getcontact():Observable<Contact[]>{
    return this.http.get<Contact[]>(url);
  }

  addcontact(cont:Contact):Observable<Contact>{
    return this.http.post<Contact>(url, cont);
  }



}
