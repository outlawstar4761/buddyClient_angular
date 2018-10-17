import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {
  HttpClient,
  HttpRequest,
  HttpHeaders
} from '@angular/common/http';

import { Transaction } from '../models/transaction';
import { Buyer } from '../models/buyer';
import { Vendor } from '../models/vendor';
import { Strain } from '../models/strain';
import { Xfer } from '../models/xfer';
import { Order } from '../models/order';
import { Inventory } from '../models/inventory';
import { UsdStash } from '../models/usd-stash';
import { BtcStash } from '../models/btc-stash';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  token:string;
  endPoint:string;

  constructor(private http:HttpClient ) {
    this.endPoint = 'http://outlawdesigns.ddns.net:4663';
    // this.endPoint = 'http://localhost:8854';
    this.token = '1234';
 }
 _buildAuthHeader():HttpHeaders{
   return new HttpHeaders({'auth_token':this.token});
 }
 authenticate(username,password):Observable<any>{
   let headers = new HttpHeaders({'request_token':username,'password':password});
   let url = this.endPoint + '/authenticate';
   return this.http.get(url,{headers:headers}).map((response)=>{return response});
 }
 verifyToken():Observable<any>{
   let url = this.endPoint + '/verify';
   return this.http.get<any>(url,{headers:this._buildAuthHeader()}).map((response)=>{return response});
 }
 getTransaction(uid:number):Observable<Transaction[]>{
   let url = this.endPoint + '/transaction';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<Transaction[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((transaction)=>{return new Transaction(transaction);});
   });
 }
 getStrain(uid:number):Observable<Strain[]>{
   let url = this.endPoint + '/strain';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<Strain[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((strain)=>{return new Strain(strain);});
   });
 }
 getVendor(uid:number):Observable<Vendor[]>{
   let url = this.endPoint + '/vendor';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<Vendor[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((vendor)=>{return new Vendor(vendor);});
   });
 }
 getBuyer(uid:number):Observable<Buyer[]>{
   let url = this.endPoint + '/buyer';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<Buyer[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((buyer)=>{return new Buyer(buyer);});
   });
 }
 getXfer(uid:number):Observable<Xfer[]>{
   let url = this.endPoint + '/xfer';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<Xfer[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((xfer)=>{return new Xfer(xfer);});
   });
 }
 getOrder(uid:number):Observable<Order[]>{
   let url = this.endPoint + '/order';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<Order[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((order)=>{return new Order(order);});
   });
 }
 getInventory(uid:number):Observable<Inventory[]>{
   let url = this.endPoint + '/inventory';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<Inventory[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((inventory)=>{return new Inventory(inventory);});
   });
 }
 getUsdStash(uid:number):Observable<UsdStash[]>{
   let url = this.endPoint + '/stash_usd';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<UsdStash[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((stash)=>{return new UsdStash(stash);});
   });
 }
 getBtcStash(uid:number):Observable<BtcStash[]>{
   let url = this.endPoint + '/stash_btc';
   if(uid !== undefined){
     url += '/' + uid;
   }
   return this.http.get<BtcStash[]>(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return response.map((stash)=>{return new BtcStash(stash);});
   });
 }
 makeSale(transaction):Observable<Transaction>{
   let url = this.endPoint + '/transaction/sale';
   return this.http.post(url,transaction,{headers:this._buildAuthHeader()}).map((response)=>{
     return new Transaction(response);
   });
 }
 makePurchase(transaction):Observable<Transaction>{
   let url = this.endPoint + '/transaction/purchase';
   return this.http.post(url,transaction,{headers:this._buildAuthHeader()}).map((response)=>{
     return new Transaction(response);
   });
 }
 acceptTip(transaction):Observable<UsdStash>{
   let url = this.endPoint + '/transaction/tip';
   return this.http.post(url,transaction,{headers:this._buildAuthHeader()}).map((response)=>{
     return new UsdStash(response);
   });
 }
 initiateXfer(xfer):Observable<Xfer>{
   let url = this.endPoint + '/xfer';
   return this.http.post(url,xfer,{headers:this._buildAuthHeader()}).map((response)=>{
     return new Xfer(response);
   });
 }
 initiateOrder(order):Observable<Order>{
   let url = this.endPoint + '/order';
   return this.http.post(url,order,{headers:this._buildAuthHeader()}).map((response)=>{
     return new Order(response);
   });
 }
 completeXfer(xfer):Observable<Xfer>{
   let url = this.endPoint + '/xfer/' + xfer.UID;
   return this.http.put(url,xfer,{headers:this._buildAuthHeader()}).map((response)=>{
     return new Xfer(response);
   });
 }
 completeOrder(order):Observable<Order>{
   let url = this.endPoint + '/order/' + order.UID;
   return this.http.put(url,order,{headers:this._buildAuthHeader()}).map((response)=>{
     return new Order(response);
   });
 }
 settleFront(UID:number):Observable<Transaction>{
   let url = this.endPoint + '/transaction/front/' + UID;
   return this.http.get(url,{headers:this._buildAuthHeader()}).map((response)=>{
     return new Transaction(response);
   });
 }
}
