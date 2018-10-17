import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Transaction } from '../../models/transaction';
import { UsdStash } from '../../models/usd-stash';

@Component({
  selector: 'app-active-front-list',
  templateUrl: './active-front-list.component.html',
  styleUrls: ['./active-front-list.component.css']
})
export class ActiveFrontListComponent implements OnInit {
  fronts:Transaction[];
  transactions:Transaction[];
  stashes:UsdStash[];
  salesTotal:number;
  purchaseTotal:number;

  constructor(private BuddyService:BuddyService){
    this.setDefaults();
    this.BuddyService.usdStashes.subscribe(stashes=>this.stashes = stashes);
    this.BuddyService.transactions.subscribe(transactions=>{
      this.setDefaults();
      this.transactions = transactions;
      transactions.forEach((transaction)=>{
        if(transaction.front === 1 && transaction.front_paid.toString() === 'Invalid Date'){
          this.fronts.push(transaction);
        }
      });
      this.calculateTotals();
    });
  }
  setDefaults():void{
    this.fronts = [];
    this.salesTotal = 0;
    this.purchaseTotal = 0;
  }
  calculateTotals(){
    this.fronts.forEach((transaction)=>{
      if(transaction.trans_type === 'P'){
        this.purchaseTotal +=  transaction.payment;
      }else{
        this.salesTotal += transaction.payment;
      }
    });
  }
  pushStash(trans_type:string,amount:number):void{
    let stash = new UsdStash();
    if(trans_type === 'S'){
      stash.current_stash = this.stashes[this.stashes.length - 1].current_stash + amount;
    }else{
      stash.current_stash = this.stashes[this.stashes.length - 1].current_stash - amount;
    }
    this.stashes.push(stash);
    this.BuddyService.usdStashes.next(this.stashes);
  }
  updateTransasction(uid:number):void{
    for(var i = 0; i < this.transactions.length; i++){
      if(this.transactions[i].UID === uid){
        this.transactions[i].front_paid = new Date();
      }
    }
    this.BuddyService.transactions.next(this.transactions);
  }
  onSelection(event):void{
    if(event.option.selected){
      this.BuddyService.settleFront(event.option.value.UID).subscribe((transaction)=>{
        this.updateTransasction(transaction.UID);
        this.pushStash(transaction.trans_type,transaction.payment);
      });
    }
  }

  ngOnInit() {
  }

}
