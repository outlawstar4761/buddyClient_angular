import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Vendor } from '../../models/vendor';
import { Strain } from '../../models/strain';
import { Transaction } from '../../models/transaction';
import { UsdStash } from '../../models/usd-stash';
import { Inventory } from '../../models/inventory';
/*
Please note: PHP backend requires vendor UID be flipped to negative BEFORE submission.
              NODE backend expects a positive vendor UID and will take care of the flip for you.
*/

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  vendors:Vendor[];
  strains:Strain[];
  transactions:Transaction[];
  stashes:UsdStash[];
  inventories:Inventory[];

  constructor(private BuddyService:BuddyService) {
    this.clearArrays();
    this.BuddyService.vendors.subscribe(vendors=>this.vendors = vendors);
    this.BuddyService.strains.subscribe(strains=>this.strains = strains);
    this.BuddyService.transactions.subscribe(transactions=>this.transactions = transactions);
    this.BuddyService.usdStashes.subscribe(stashes=>this.stashes = stashes);
    this.BuddyService.inventories.subscribe(inventories=>this.inventories = inventories);
  }
  clearArrays():void{
    this.vendors = [];
    this.strains = [];
    this.transactions = [];
  }
  pushStash(amount):void{
    let stash = new UsdStash();
    stash.current_stash = this.stashes[this.stashes.length - 1].current_stash - amount;
    this.stashes.push(stash);
    this.BuddyService.usdStashes.next(this.stashes);
  }
  pushInventory(amount):void{
    let inventory = new Inventory();
    inventory.current_inventory = this.inventories[this.inventories.length -1].current_inventory + amount;
    this.inventories.push(inventory);
    this.BuddyService.inventories.next(this.inventories);
  }
  updateStrain(uid,amount):void{
    for(var i = 0; i < this.strains.length; i++){
      if(this.strains[i].UID === uid){
        this.strains[i].inventory += amount;
      }
    }
    this.BuddyService.strains.next(this.strains);
  }

  ngOnInit() {
  }

  onSubmit(value){
    this.updateStrain(value.strain,value.product_amount);
    let transaction = new Transaction(value);
    this.BuddyService.makePurchase(transaction).subscribe((transaction)=>{
      console.log(transaction);
      this.pushStash(transaction.payment);
      this.pushInventory(transaction.product_amount);
      this.transactions.push(transaction);
      this.BuddyService.transactions.next(this.transactions);
    });
  }

}
