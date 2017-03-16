import { Component, OnInit } from '@angular/core';
import { passwordService } from '../services/passwordService';
import { roomateService } from '../services/roomateService';


@Component({
  selector: 'app-roomateform',
  templateUrl: './roomateform.component.html',
  styleUrls: ['./roomateform.component.css']
})
export class RoomateformComponent implements OnInit {
  authenticate:Boolean;
  roomateModel={
     "firstName":"",
     "lastName":"",
     "phone":"",
     "email":""    
  };

  add=()=>{
    this._roomateService.addRoomate(this.roomateModel);
    this.roomateModel={
      "firstName":"",
      "lastName":"",
      "phone":"",
      "email":"" 
    };
  }
  
  constructor(private _roomateService:roomateService/*private _passwordService:passwordService*/) { 
    // this._passwordService.authUpdated.subscribe(
    //   (authenticate)=>{
    //     this.authenticate = this._passwordService.getAuthenticate();
    //   }
    // );
  }
  

  ngOnInit() {
  }

}
