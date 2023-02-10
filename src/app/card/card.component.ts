import { Component, Input } from '@angular/core';
import { Quote } from '../model/quote';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
   @Input()
   quote : Quote | undefined | null;
}
