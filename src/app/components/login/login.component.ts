import { Component, OnInit } from '@angular/core';
import { BuddyService } from '../../services/buddy.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  password:string;
  username:string;
  showSpinner:boolean;

  constructor(private BuddyService:BuddyService) {
    this.showSpinner = false;
  }

  ngOnInit() {
  }

  login():void{
    this.BuddyService.authenticate(this.username,this.password);
  }

}
