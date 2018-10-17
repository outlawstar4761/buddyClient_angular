import { Component, OnInit,Input } from '@angular/core';
import { Strain } from '../../models/strain';
@Component({
  selector: 'app-strain-preview',
  templateUrl: './strain-preview.component.html',
  styleUrls: ['./strain-preview.component.css']
})
export class StrainPreviewComponent implements OnInit {
  @Input() model:Strain;

  constructor() {
  }

  ngOnInit() {
  }

}
