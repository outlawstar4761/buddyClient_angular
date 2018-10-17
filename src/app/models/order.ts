export class Order {
  UID:number;
  vendor:number;
  strain:number;
  product_amount:number;
  btc_amount:number;
  usd_amount:number;
  shipping_amount_usd:number;
  shipping_amount_btc:number;
  btc_fees:number;
  btc_total_amount:number;
  usd_total_amount:number;
  created_date:Date;
  shipped_date:Date;
  received_date:Date;
  user:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.vendor = obj && obj.vendor || 0;
    this.strain = obj && obj.strain || 0;
    this.product_amount = obj && obj.product_amount || 0;
    this.btc_amount = obj && obj.btc_amount || 0;
    this.usd_amount = obj && obj.usd_amount || 0;
    this.shipping_amount_usd = obj && obj.shipping_amount_usd || 0;
    this.shipping_amount_btc = obj && obj.shipping_amount_btc || 0;
    this.btc_fees = obj && obj.btc_fees || 0;
    this.btc_total_amount = obj && obj.btc_total_amount || 0;
    this.usd_total_amount = obj && obj.usd_total_amount || 0;
    this.created_date = obj && obj.created_date || null;
    this.shipped_date = obj && new Date(obj.shipped_date) || null;
    this.received_date = obj && new Date(obj.received_date) || null;
    this.user = obj && obj.user || null;
  }
}
