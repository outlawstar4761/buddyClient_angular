import { Component, OnInit,Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { ActiveXferListComponent } from '../active-xfer-list/active-xfer-list.component';
import { BuddyService } from '../../services/buddy.service';
import { Xfer } from '../../models/xfer';
import { BtcStash } from '../../models/btc-stash';

@Component({
  selector: 'app-xfer-bottom-sheet',
  templateUrl: './xfer-bottom-sheet.component.html',
  styleUrls: ['./xfer-bottom-sheet.component.css']
})
export class XferBottomSheetComponent implements OnInit {
  xfers:Xfer[];
  stashes:BtcStash[];
  xfer:Xfer;

  constructor(private bottomSheetRef:MatBottomSheetRef<ActiveXferListComponent>,private BuddyService:BuddyService,@Inject(MAT_BOTTOM_SHEET_DATA) public data: any){
    this.BuddyService.xfers.subscribe(xfers=>this.xfers = xfers);
    this.BuddyService.btcStashes.subscribe(stashes=>this.stashes = stashes);
  }

  openLink(event:MouseEvent):void{
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
  onSubmit(value):void{
    let xfer = new Xfer(Object.assign(this.data,value));
    this.BuddyService.completeXfer(xfer).subscribe((xfer)=>{
      this.xfer = xfer;
      this.pushStash(this.xfer.btc_gained);
      this.updateXfer(this.xfer.UID);
    });
  }
  pushStash(amount:number){
    let stash = new BtcStash();
    stash.current_stash = this.stashes[this.stashes.length - 1].current_stash + amount;
    this.stashes.push(stash);
    this.BuddyService.btcStashes.next(this.stashes);
  }
  updateXfer(UID:number){
    console.log(UID);
    for(var i = 0; i < this.xfers.length;i++){
      if(this.xfers[i].UID === UID){
        this.xfers[i] = this.xfer;
      }
    }
    this.BuddyService.xfers.next(this.xfers);
    this.bottomSheetRef.dismiss();
  }

  ngOnInit() {
  }

}
