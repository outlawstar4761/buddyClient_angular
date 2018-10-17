import { Component, OnInit } from '@angular/core';
import { Order } from '../../models/order';
import { BtcStash } from '../../models/btc-stash';
import { Vendor } from '../../models/vendor';
import { Strain } from '../../models/strain';
import { BuddyService } from '../../services/buddy.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  stashes:BtcStash[];
  strains:Strain[];
  vendors:Vendor[];
  orders:Order[];

  constructor(private BuddyService:BuddyService){
    this.BuddyService.btcStashes.subscribe(stashes=>{this.stashes = []; this.stashes = stashes});
    this.BuddyService.vendors.subscribe(vendors=>{this.vendors = []; this.vendors = vendors});
    this.BuddyService.strains.subscribe(strains=>{this.strains = []; this.strains = strains});
    this.BuddyService.orders.subscribe(orders=>{this.orders = []; this.orders = orders});
  }
  pushStash(amount):void{
    let stash = new BtcStash();
    stash.current_stash = this.stashes[this.stashes.length - 1].current_stash - amount;
    this.stashes.push(stash);
    this.BuddyService.btcStashes.next(this.stashes);
  }

  ngOnInit() {
  }
  onSubmit(value){
    let order = new Order(value);
    this.BuddyService.initiateOrder(order).subscribe((order)=>{
      this.pushStash(order.btc_total_amount);
      this.orders.push(order);
      this.BuddyService.orders.next(this.orders);
    });
  }

}
