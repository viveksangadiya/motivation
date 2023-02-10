import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Quote } from './model/quote';
import { QuoteServiceService } from './services/quote-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'motivation';

  result : Observable<Quote> | undefined;
  constructor(private quoteServiceService:QuoteServiceService){}
  ngOnInit(): void {
   this.result = this.quoteServiceService.onloadCourse()

   console.log (this.result);
}

}
