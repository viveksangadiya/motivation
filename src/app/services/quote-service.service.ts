import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Quote } from '../model/quote';
@Injectable({
  providedIn: 'root'
})
export class QuoteServiceService {

  constructor(private http : HttpClient) { }

  onloadCourse():Observable<Quote>{
    return this.http.get<Quote>("https://insult.mattbas.org/api/en/insult.json");
  }

}
