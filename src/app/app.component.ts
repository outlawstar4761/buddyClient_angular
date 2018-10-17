import { Component } from '@angular/core';
import { BuddyService } from './services/buddy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private BuddyService: BuddyService){
    this.BuddyService.checkCookie();
  }
}
