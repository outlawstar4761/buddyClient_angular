export class Xfer {
  UID:number;
  stash_used:number;
  btc_gained:number;
  stash_exceeded:number;
  initial_rate:number;
  stash_lost:number;
  completion_rate:number;
  stash_gained:number;
  created_date:Date;
  completed_date:string;
  complete:number;
  user:string;

  constructor(obj?: any){
    this.UID = obj && obj.UID || null;
    this.stash_used = obj && obj.stash_used || 0;
    this.btc_gained = obj && obj.btc_gained || 0;
    this.stash_exceeded = obj && obj.stash_exceeded || 0;
    this.initial_rate = obj && obj.initial_rate || 0;
    this.stash_lost = obj && obj.stash_lost || 0;
    this.completion_rate = obj && obj.completion_rate || 0;
    this.created_date = obj && new Date(obj.created_date) || null;
    this.completed_date = obj && obj.completed_date || 0;
    this.complete = obj && obj.complete || 0;
    this.user = obj && obj.user || null;
  }
}
