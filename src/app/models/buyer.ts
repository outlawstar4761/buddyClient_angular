export class Buyer {
  UID:number;
  buyer:string;
  legacy:boolean;
  active:boolean;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.buyer = obj && obj.buyer || null;
    this.legacy = obj && obj.legacy || null;
    this.active = obj && obj.active || null; 
  }
}
