import { Component, OnInit,Input } from '@angular/core';
import { Vendor } from '../../models/vendor';
@Component({
  selector: 'app-vendor-preview',
  templateUrl: './vendor-preview.component.html',
  styleUrls: ['./vendor-preview.component.css']
})
export class VendorPreviewComponent implements OnInit {
  @Input() model:Vendor;
  constructor() { }

  ngOnInit() {
  }

}
