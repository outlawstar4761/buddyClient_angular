export class Transaction {
  UID:number;
  teh_date:string;
  trans_type:string;
  product_amount:number;
  payment:number;
  front:number;
  buyer:string;
  discrepency:boolean;
  legacy:boolean;
  created_date:Date;
  strain:string;
  front_paid:Date;
  user:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.teh_date = obj && obj.teh_date || null;
    this.trans_type = obj && obj.trans_type || null;
    this.product_amount = obj && obj.product_amount || 0;
    this.payment = obj && obj.payment || 0;
    this.front = obj && obj.front || 0;
    this.buyer = obj && obj.buyer || 0;
    this.discrepency = obj && obj.discrepency || false;
    this.legacy = obj && obj.legacy || false;
    this.created_date = obj && obj.created_date || null;
    this.strain = obj && obj.strain || null;
    this.front_paid = obj && new Date(obj.front_paid) || null;
    this.user = obj && obj.user || null;
  }

}
