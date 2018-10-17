import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { BuddyService } from '../../services/buddy.service';
import { Inventory } from '../../models/inventory';
import { UsdStash } from '../../models/usd-stash';
import { BtcStash } from '../../models/btc-stash';
import * as buddyModule from '../../buddyModule.js';
import { Observable,Subject, BehaviorSubject } from 'rxjs';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/concat';
@Component({
  selector: 'app-burn-notice',
  templateUrl: './burn-notice.component.html',
  styleUrls: ['./burn-notice.component.css']
})
export class BurnNoticeComponent implements OnInit {
  transactions:Transaction[];
  inventories:Inventory[];
  btcStashes:BtcStash[];
  usdStashes:UsdStash[];
  stats:any;
  dte:number;
  current_inventory:number;
  current_usd:number;
  current_btc:number;

  constructor(private BuddyService:BuddyService) {
    this.setDefaults();
    this.BuddyService.transactions.subscribe((transactions)=>{
      this.transactions = transactions;
      this.stats = buddyModule.buddyModule.weeklyStats(this.transactions);
    });
    this.BuddyService.inventories.subscribe((inventories)=>{
      this.inventories = inventories;
      if(this.transactions.length && this.inventories.length){
        this.current_inventory = this.inventories[this.inventories.length - 1].current_inventory;
        this.dte = buddyModule.buddyModule.calculateInventoryDays(this.transactions,this.inventories[this.inventories.length - 1].current_inventory);
      }
    });
    this.BuddyService.usdStashes.subscribe((stashes)=>{
      this.usdStashes = stashes;
      this.current_usd = this.usdStashes.length ? this.usdStashes[this.usdStashes.length - 1].current_stash : 0;
    });
    this.BuddyService.btcStashes.subscribe((stashes)=>{
      this.btcStashes = stashes;
      this.current_btc = this.btcStashes.length ? this.btcStashes[this.btcStashes.length - 1].current_stash : 0;
    });
  }
  setDefaults():void{
    this.stats = {total:0,personal:0,sold:0,discrepency:0,income:0,expense:0};
    this.transactions = [];
    this.inventories = [];
    this.dte = 0;
    this.current_inventory = 0;
  }
  getSalesIcon(percentage):string{
    if(percentage >= 90){
      return 'sentiment_very_satisfied';
    }else if(percentage <= 89 && percentage >= 80){
      return 'sentiment_neutral';
    }else if(percentage <= 79 && percentage >= 70){
      return 'sentiment_dissatisfied';
    }
    return 'sentiment_very_dissatisfied';
  }
  getPersonalIcon(percentage):string{
    if(percentage >= 33){
      return 'sentiment_very_dissatisfied';
    }else if(percentage >= 25){
      return 'sentiment_dissatisfied';
    }else if(percentage >= 10){
      return 'sentiment_neutral';
    }
    return 'sentiment_very_satisfied';
  }
  getDiscrepencyIcon(percentage):string{
    if(percentage >= 20){
      return 'sentiment_very_dissatisfied';
    }else if(percentage >= 15){
      return 'sentiment_dissatisfied';
    }else if(percentage >= 10){
      return 'sentiment_neutral';
    }
    return 'sentiment_very_satisfied';
  }
  getIncrement(number):string{
    if(number < 28){
      return 'Grams';
    }else if( number < 448){
      return 'Oz';
    }
    return 'Lb';
  }
  reduceGrams(number):number{
    if(number < 28){
      return number;
    }else{
      number = number / 28;
    }
    if(number >= 16){
      number = number / 16;
    }
    return Math.round(number * 100) / 100;
  }
  ngOnInit() {}

}
