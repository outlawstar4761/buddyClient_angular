import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Vendor } from '../../models/vendor';
@Component({
  selector: 'app-active-vendor-list',
  templateUrl: './active-vendor-list.component.html',
  styleUrls: ['./active-vendor-list.component.css']
})
export class ActiveVendorListComponent implements OnInit {
  vendors:Vendor[];

  constructor(private BuddyService:BuddyService) {
    this.vendors = [];
    this.BuddyService.vendors.subscribe(vendors=>{vendors.forEach((vendor)=>{this.vendors.push(vendor);});});
  }

  ngOnInit() {
  }

}
