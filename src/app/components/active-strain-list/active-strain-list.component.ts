import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';
import { Strain } from '../../models/strain';

@Component({
  selector: 'app-active-strain-list',
  templateUrl: './active-strain-list.component.html',
  styleUrls: ['./active-strain-list.component.css']
})
export class ActiveStrainListComponent implements OnInit {
  strains:Strain[];

  constructor(private BuddyService:BuddyService) {
    this.strains = [];
    this.BuddyService.strains.subscribe(strains=>strains.forEach((strain)=>{
      strain.inStock ? this.strains.push(strain) : null;
      strain.preview = strain.description.substring(0,45);
    }));
  }

  ngOnInit() {
  }

}
