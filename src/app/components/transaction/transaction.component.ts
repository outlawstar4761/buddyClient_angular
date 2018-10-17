import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Transaction } from '../../models/transaction';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  sale:boolean;
  tip:boolean;
  purchase:boolean;
  xfer:boolean;
  order:boolean;

  constructor(private BuddyService:BuddyService) {
    this.setDefaults();
  }
  setDefaults():void{
    this.sale = false;
    this.tip = false;
    this.purchase = false;
    this.xfer = false;
    this.order = false;
  }

  ngOnInit() {
  }

}
