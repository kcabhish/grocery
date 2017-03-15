import { Component, OnInit } from '@angular/core';
import {MdDialog} from '@angular/material';

@Component({
  selector: 'create-account',
  template:"<span (click)='openDialog()'>No Account ? create one for free</span>",
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  
  constructor(public dialog: MdDialog) {}
  openDialog() {
    this.dialog.open(passwordDialog);
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

}
