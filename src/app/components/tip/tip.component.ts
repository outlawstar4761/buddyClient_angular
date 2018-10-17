import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Buyer } from '../../models/buyer';
import { Transaction } from '../../models/transaction';
import { UsdStash } from '../../models/usd-stash';

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html',
  styleUrls: ['./tip.component.css']
})
export class TipComponent implements OnInit {
  buyers:Buyer[];
  transactions:Transaction[];
  stashes:UsdStash[];
  meKey:number;

  constructor(private BuddyService:BuddyService) {
    this.meKey = 9999;
    this.setDefaults();
    this.buyers = [new Buyer({UID:this.meKey,buyer:'Me',active:true})];
    this.BuddyService.buyers.subscribe(buyers=>buyers.forEach((buyer)=>{buyer.active ? this.buyers.push(buyer) : null;}));
    this.BuddyService.transactions.subscribe(transactions=>this.transactions = transactions);
    this.BuddyService.usdStashes.subscribe(stashes=>this.stashes = stashes);
  }
  setDefaults(){
    this.transactions = [];
    this.stashes = [];
  }
  pushStash(amount):void{
    let stash = new UsdStash();
    stash.current_stash = this.stashes[this.stashes.length - 1].current_stash + amount;
    this.stashes.push(stash);
    this.BuddyService.usdStashes.next(this.stashes);
  }
  onSubmit(value){
    value.buyer = value.buyer === this.meKey ? 0 : value.buyer;
    let transaction = new Transaction(value);
    this.BuddyService.acceptTip(transaction).subscribe((stash)=>{
      this.pushStash(transaction.payment);
      this.stashes.push(stash);
      this.BuddyService.usdStashes.next(this.stashes);
    });
  }

  ngOnInit() {
  }

}
