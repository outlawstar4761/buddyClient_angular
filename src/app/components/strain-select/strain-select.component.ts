import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Strain } from '../../models/strain';

@Component({
  selector: 'app-strain-select',
  templateUrl: './strain-select.component.html',
  styleUrls: ['./strain-select.component.css']
})
export class StrainSelectComponent implements OnInit {
  value:number;
  strains:Strain[];

  constructor(private BuddyService:BuddyService) {
    this.strains = [];
    this.BuddyService.strains.subscribe(strains=>strains.forEach((strain)=>{strain.inStock ? this.strains.push(strain) : null;}));
  }

  ngOnInit() {
  }

}
