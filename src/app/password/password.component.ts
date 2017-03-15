import { Component, OnInit } from '@angular/core';
import {MdDialog,MdDialogRef} from '@angular/material';
import { passwordService } from '../services/passwordService';


@Component({
  selector: 'create-account',
  template:"<span (click)='openDialog()'>No Account ? create one for free</span>",
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  
  constructor(public dialog: MdDialog) {}
  openDialog() {
    this.dialog.open(passwordDialog,{
      disableClose:true
    });
  }
  ngOnInit() {
  }

}

@Component({
  selector: 'password-dialog',
  templateUrl:"./password.component.html",
})
export class passwordDialog {
passwordModel={
    "username":"",
    "password1":"",
    "password2":""
  }
  addUser=()=>{
    if (this.passwordModel.password1===this.passwordModel.password2 && this.passwordModel.password1.length>0){
      this._passwordService.addUser({
        "userName":this.passwordModel.username,
        "password":this.passwordModel.password1
      });
      this.dialogRef.close();
    }else{
      alert("invalid password");
    }
    
    console.log(this._passwordService.validUsers);
    
  }
  constructor(public dialogRef: MdDialogRef<passwordDialog>,public _passwordService:passwordService){}

}
