export class Strain {
  UID:number;
  name:string;
  thc:number;
  indica:number;
  sativa:number;
  description:string;
  inStock:boolean;
  inventory:number;
  ppg:number;
  img_path:number;
  created_date:string;

  preview:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.name = obj && obj.name || null;
    this.thc = obj && obj.thc || 0;
    this.indica = obj && obj.indica || 0;
    this.sativa = obj && obj.sativa || 0;
    this.description = obj && obj.description || null;
    this.inStock = obj && obj.inStock || false;
    this.inventory = obj && obj.inventory || 0;
    this.ppg = obj && obj.ppg || null;
    this.img_path = obj && obj.img_path || null;
    this.created_date = obj && obj.created_date || null;
  }
}
