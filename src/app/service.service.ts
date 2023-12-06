import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assesment } from './assesment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  createAssesment(assesment : Assesment){
    const body = JSON.stringify(assesment)
    const headers = { 'content-type': 'application/json'}
    this.http.post("http://localhost:8080/assesment/record",body,{'headers':headers})
    .subscribe(respose=>{console.log(respose)})
  }
  getAssesments():Observable<Assesment[]>{
    return this.http.get<Assesment[]>("http://localhost:8080/assesment/records")
  }
}
