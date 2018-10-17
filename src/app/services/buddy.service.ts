import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Subject, BehaviorSubject,Observable } from 'rxjs';
import { Router } from '@angular/router';

import { ApiService } from './api.service';
import { Transaction } from '../models/transaction';
import { Buyer } from '../models/buyer';
import { Vendor } from '../models/vendor';
import { Strain } from '../models/strain';
import { Order } from '../models/order';
import { Xfer } from '../models/xfer';
import { Inventory } from '../models/inventory';
import { UsdStash } from '../models/usd-stash';
import { BtcStash } from '../models/btc-stash';

@Injectable({
  providedIn: 'root'
})
export class BuddyService {
  transactions: Subject<Transaction[]> = new BehaviorSubject<Transaction[]>([]);
  strains: Subject<Strain[]> = new BehaviorSubject<Strain[]>([]);
  buyers:Subject<Buyer[]> = new BehaviorSubject<Buyer[]>([]);
  vendors:Subject<Vendor[]> = new BehaviorSubject<Vendor[]>([]);
  xfers:Subject<Xfer[]> = new BehaviorSubject<Xfer[]>([]);
  orders:Subject<Order[]> = new BehaviorSubject<Order[]>([]);
  inventories:Subject<Inventory[]> = new BehaviorSubject<Inventory[]>([]);
  usdStashes:Subject<UsdStash[]> = new BehaviorSubject<UsdStash[]>([]);
  btcStashes:Subject<BtcStash[]> = new BehaviorSubject<BtcStash[]>([]);

  constructor(private ApiService:ApiService,private cookie:CookieService,private router:Router) {
  }
  authenticate(username,password):void{
    this.ApiService.authenticate(username,password).subscribe((response)=>{
      if(!response['error']){
        this.ApiService.token = response.token;
        this.cookie.set('auth_token',this.ApiService.token);
        this.checkCookie();
      }else{
        this.router.navigateByUrl('/login');
        console.log(response);
      }
    });
  }
  checkCookie():void{
    if(this.cookie.check('auth_token')){
      this.ApiService.token = this.cookie.get('auth_token');
      this.ApiService.verifyToken().subscribe((response)=>{
        if(!response['error']){
          this.init();
          this.router.navigateByUrl('/home');
        }else{
          console.log(response);
          this.router.navigateByUrl('/login');
        }
      },console.log);
    }
  }
  init():void{
    this.ApiService.getStrain(undefined).subscribe(data => {this.strains.next(data);});
    this.ApiService.getTransaction(undefined).subscribe(data =>{this.transactions.next(data);});
    this.ApiService.getBuyer(undefined).subscribe(data=>{this.buyers.next(data);});
    this.ApiService.getVendor(undefined).subscribe(data=>{this.vendors.next(data);});
    this.ApiService.getInventory(undefined).subscribe(data=>{this.inventories.next(data);});
    this.ApiService.getUsdStash(undefined).subscribe(data=>{this.usdStashes.next(data);});
    this.ApiService.getBtcStash(undefined).subscribe(data=>{this.btcStashes.next(data);});
    this.ApiService.getXfer(undefined).subscribe(data=>{this.xfers.next(data);});
    this.ApiService.getOrder(undefined).subscribe(data=>{this.orders.next(data);});
  }
  makeSale(transaction:Transaction):Observable<Transaction>{
    return this.ApiService.makeSale(transaction);
  }
  makePurchase(transaction:Transaction):Observable<Transaction>{
    return this.ApiService.makePurchase(transaction);
  }
  acceptTip(transaction:Transaction):Observable<UsdStash>{
    return this.ApiService.acceptTip(transaction);
  }
  initiateXfer(xfer:Xfer):Observable<Xfer>{
    return this.ApiService.initiateXfer(xfer);
  }
  initiateOrder(order:Order):Observable<Order>{
    return this.ApiService.initiateOrder(order);
  }
  completeXfer(xfer:Xfer):Observable<Xfer>{
    return this.ApiService.completeXfer(xfer);
  }
  completeOrder(order:Order):Observable<Order>{
    return this.ApiService.completeOrder(order);
  }
  settleFront(UID:number):Observable<Transaction>{
    return this.ApiService.settleFront(UID);
  }
}
