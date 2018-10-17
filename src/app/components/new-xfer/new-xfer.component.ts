import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Xfer } from '../../models/xfer';
import { UsdStash } from '../../models/usd-stash';

@Component({
  selector: 'app-new-xfer',
  templateUrl: './new-xfer.component.html',
  styleUrls: ['./new-xfer.component.css']
})
export class NewXferComponent implements OnInit {
  stashes:UsdStash[];
  xfers:Xfer[];

  constructor(private BuddyService:BuddyService) {
    this.BuddyService.usdStashes.subscribe(stashes=>{this.stashes = stashes});
    this.BuddyService.xfers.subscribe(xfers=>{this.xfers = xfers});
  }
  pushStash(amount):void{
    let stash = new UsdStash();
    stash.current_stash = this.stashes[this.stashes.length - 1].current_stash - amount;
    this.stashes.push(stash);
    this.BuddyService.usdStashes.next(this.stashes);
  }

  ngOnInit() {
  }
  onSubmit(value){
    let xfer = new Xfer(value);
    this.BuddyService.initiateXfer(xfer).subscribe((xfer)=>{
      this.pushStash(xfer.stash_used);
      this.xfers.push(xfer);
      this.BuddyService.xfers.next(this.xfers);
    });
  }

}
