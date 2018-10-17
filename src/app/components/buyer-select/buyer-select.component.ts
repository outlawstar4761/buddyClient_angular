import { Component, OnInit } from '@angular/core';
import { Buyer } from '../../models/buyer';
import { BuddyService } from '../../services/buddy.service';

@Component({
  selector: 'app-buyer-select',
  templateUrl: './buyer-select.component.html',
  styleUrls: ['./buyer-select.component.css']
})
export class BuyerSelectComponent implements OnInit {
  buyers:Buyer[];
  value:number;

  constructor(private BuddyService:BuddyService) {
    this.buyers = [];
    this.BuddyService.buyers.subscribe(buyers=>buyers.forEach((buyer)=>{buyer.active ? this.buyers.push(buyer) : null;}));
  }

  ngOnInit() {
  }

}
