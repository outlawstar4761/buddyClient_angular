import { Component, OnInit,Input } from '@angular/core';
import { Buyer } from '../../models/buyer';
@Component({
  selector: 'app-buyer-preview',
  templateUrl: './buyer-preview.component.html',
  styleUrls: ['./buyer-preview.component.css']
})
export class BuyerPreviewComponent implements OnInit {
  @Input() model:Buyer;

  constructor() { }

  ngOnInit() {
  }

}
