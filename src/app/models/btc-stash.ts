export class BtcStash {
  UID:number;
  current_stash:number;
  created_date:string;
  user:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.current_stash = obj && obj.current_stash || 0;
    this.created_date = obj && obj.created_date || null;
    this.user = obj && obj.user || null;
  }
}
