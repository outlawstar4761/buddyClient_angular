import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';
import { XferBottomSheetComponent } from '../xfer-bottom-sheet/xfer-bottom-sheet.component';
import { BuddyService } from '../../services/buddy.service';
import { Transaction } from '../../models/transaction';
import { BtcStash } from '../../models/btc-stash';
import { Xfer } from '../../models/xfer';
@Component({
  selector: 'app-active-xfer-list',
  templateUrl: './active-xfer-list.component.html',
  styleUrls: ['./active-xfer-list.component.css']
})
export class ActiveXferListComponent implements OnInit {
  xfers:Xfer[];
  total:number;

  constructor(private BuddyService:BuddyService,private bottomSheet:MatBottomSheet){
    this.setDefaults();
    this.BuddyService.xfers.subscribe(xfers=>{
      this.setDefaults();
      xfers.forEach((xfer)=>{
        if(xfer.complete === 0){
          this.xfers.push(xfer);
        }
      });
      this.calculateTotal();
    });
  }
  onSelection(event):void{
    if(event.option.selected){
      this.bottomSheet.open(XferBottomSheetComponent,{data:event.option.value});
    }
  }
  setDefaults():void{
    this.xfers = [];
    this.total = 0;
  }
  calculateTotal(){
    this.xfers.forEach((xfer)=>{
      this.total += xfer.stash_used;
    });
  }

  ngOnInit() {
  }

}
