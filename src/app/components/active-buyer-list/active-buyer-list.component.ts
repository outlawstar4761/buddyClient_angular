import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Buyer } from '../../models/buyer';
@Component({
  selector: 'app-active-buyer-list',
  templateUrl: './active-buyer-list.component.html',
  styleUrls: ['./active-buyer-list.component.css']
})
export class ActiveBuyerListComponent implements OnInit {
  buyers:Buyer[];

  constructor(private BuddyService: BuddyService) {
    this.buyers = [];
    this.BuddyService.buyers.subscribe(buyers=>buyers.forEach((buyer)=>{buyer.active ? this.buyers.push(buyer) : null;}));
  }

  ngOnInit() {
  }

}
