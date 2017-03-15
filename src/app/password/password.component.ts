import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  passwordModel={
    "username":"",
    "password1":"",
    "password2":""
  }
  constructor() { }

  ngOnInit() {
  }

}
