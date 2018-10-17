import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Order } from '../../models/order';
import { Vendor } from '../../models/vendor';
import { Strain } from '../../models/strain';
import { Inventory } from '../../models/inventory';

@Component({
  selector: 'app-active-order-list',
  templateUrl: './active-order-list.component.html',
  styleUrls: ['./active-order-list.component.css']
})
export class ActiveOrderListComponent implements OnInit {
  orders:Order[];
  strains:Strain[];
  vendors:Vendor[];
  inventories:Inventory[];

  constructor(private BuddyService:BuddyService) {
    this.BuddyService.strains.subscribe(strains=>{this.strains = []; this.strains = strains});
    this.BuddyService.vendors.subscribe(vendors=>{this.vendors = []; this.vendors = vendors});
    this.BuddyService.inventories.subscribe(inventories=>{this.inventories = []; this.inventories = inventories;});
    this.BuddyService.orders.subscribe(orders=>{
      this.orders = [];
      orders.forEach((order)=>{
        if(order.received_date.toString() === 'Invalid Date'){
          this.orders.push(order);
        }
      });
    });
  }
  getVendorLabel(UID:string):string{
    for(var i = 0; i < this.vendors.length; i++){
      if(this.vendors[i].UID === parseInt(UID)){
        return this.vendors[i].name;
      }
    }
    return '';
  }
  getStrainLabel(UID:number):string{
    for(var i = 0; i < this.strains.length; i++){
      if(this.strains[i].UID === UID){
        return this.strains[i].name;
      }
    }
    return '';
  }
  updateOrder(order:Order):void{
    for(var i = 0; i < this.orders.length; i++){
      if(this.orders[i].UID === order.UID){
        this.orders[i] = order;
      }
    }
    this.BuddyService.orders.next(this.orders);
  }
  updateStrain(UID:number,product_amount:number):void{
    for(var i = 0; i < this.strains.length; i++){
      if(this.strains[i].UID === UID){
        this.strains[i].inventory += product_amount;
        this.strains[i].inStock = true;
      }
    }
    this.BuddyService.strains.next(this.strains);
  }
  pushInventory(amount):void{
    let inventory = new Inventory();
    inventory.current_inventory = this.inventories[this.inventories.length -1].current_inventory + amount;
    this.inventories.push(inventory);
    this.BuddyService.inventories.next(this.inventories);
  }
  onSelection(event){
    if(event.option.selected){
      let order = new Order(event.option.value);
      this.BuddyService.completeOrder(order).subscribe((order)=>{
        this.updateOrder(order);
        this.pushInventory(order.product_amount);
        this.updateStrain(order.strain,order.product_amount);
      });
    }
  }

  ngOnInit() {
  }

}
