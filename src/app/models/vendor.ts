export class Vendor {
  UID:number;
  name:string;
  ppg_key:string;
  created_date:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.name = obj && obj.name || null;
    this.ppg_key = obj && obj.ppg_key || null;
    this.created_date = obj && obj.created_date || null;
  }
}
