export class Inventory {
  UID:number;
  teh_date:string;
  current_inventory:number;
  legacy:boolean;
  created_date:string;
  user:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.teh_date = obj && obj.teh_date || null;
    this.current_inventory = obj && obj.current_inventory || 0;
    this.legacy = obj && obj.legacy || false;
    this.created_date = obj && obj.created_date || null;
    this.user = obj && obj.user || null;
  }
}
