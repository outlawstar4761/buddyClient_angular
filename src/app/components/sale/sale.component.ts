import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Buyer } from '../../models/buyer';
import { Strain } from '../../models/strain';
import { Transaction } from '../../models/transaction';
import { UsdStash } from '../../models/usd-stash';
import { Inventory } from '../../models/inventory';
/*
SERVER EXPECTS TO BE PASSED 0 AS UID FOR 'Me' TRANSACTIONS.
INJECTING BUYER WITH UID 0 CAUSED SELECTOR TO BREAK AND 'Me' TO BE UNSELECTABLE
THIS IS WHY WE ARE USING 'meKey'
*/

@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.css']
})
export class SaleComponent implements OnInit {
  buyers:Buyer[];
  strains:Strain[];
  transactions:Transaction[];
  stashes:UsdStash[];
  inventories:Inventory[];
  meKey:number;

  constructor(private BuddyService:BuddyService) {
    this.meKey = 9999;
    this.clearArrays();
    this.BuddyService.buyers.subscribe(buyers=>buyers.forEach((buyer)=>{buyer.active ? this.buyers.push(buyer) : null;}));
    this.BuddyService.strains.subscribe(strains=>{
      this.strains = [];
      strains.forEach((strain)=>{strain.inStock ? this.strains.push(strain) : null;})
    });
    this.BuddyService.transactions.subscribe(transactions=>this.transactions = transactions);
    this.BuddyService.usdStashes.subscribe(stashes=>this.stashes = stashes);
    this.BuddyService.inventories.subscribe(inventories=>this.inventories = inventories);
  }
  clearArrays():void{
    this.buyers = [new Buyer({UID:this.meKey,buyer:'Me',active:true})];
    this.strains = [];
    this.transactions = [];
  }
  pushStash(amount):void{
    let stash = new UsdStash();
    stash.current_stash = this.stashes[this.stashes.length - 1].current_stash + amount;
    this.stashes.push(stash);
    this.BuddyService.usdStashes.next(this.stashes);
  }
  pushInventory(amount):void{
    let inventory = new Inventory();
    inventory.current_inventory = this.inventories[this.inventories.length -1].current_inventory - amount;
    this.inventories.push(inventory);
    this.BuddyService.inventories.next(this.inventories);
  }
  updateStrain(uid,amount):void{
    for(var i = 0; i < this.strains.length; i++){
      if(this.strains[i].UID === uid){
        this.strains[i].inventory -= amount;
        this.strains[i].inStock = (this.strains[i].inventory > 0) ? true : false;
      }
    }
    this.BuddyService.strains.next(this.strains);
  }
  onSubmit(value):void{
    value.buyer = value.discrepency ? this.meKey : value.buyer;
    value.buyer = value.buyer === this.meKey ? 0 : value.buyer;
    value.payment = value.payment === (null || '') ? 0 : value.payment;
    value.payment = value.discrepency ? 0 : value.payment;
    let targetUID = value.strain;
    let transaction = new Transaction(value);
    this.updateStrain(targetUID,transaction.product_amount);
    this.pushInventory(transaction.product_amount);
    this.BuddyService.makeSale(transaction).subscribe((transaction)=>{
      this.transactions.push(transaction);
      this.BuddyService.transactions.next(this.transactions);
      if(transaction.payment && !transaction.front){
        this.pushStash(transaction.payment);
      }
    });
  }

  ngOnInit() {
  }

}
