import { Component, OnInit } from '@angular/core';
import { passwordService } from '../services/passwordService';
@Component({
  selector: 'app-roomatetabs',
  templateUrl: './roomatetabs.component.html',
  styleUrls: ['./roomatetabs.component.css']
})
export class RoomatetabsComponent implements OnInit {
  authenticate:Boolean;
  logout=()=>{
    this._passwordService.setAuthenticate(false);
  }
  constructor(private _passwordService:passwordService) { 
    this._passwordService.authUpdated.subscribe(
      (authenticate)=>{
        this.authenticate = this._passwordService.getAuthenticate();
      }
    );
  }
  ngOnInit() {
  }
}
