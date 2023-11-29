import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  login = {
    email: "",
    password: "",
    cpassword: ""
  };
  type: boolean = true;
  constructor(private router : Router) { }

  ngOnInit() {
  }

  changeType() {
    this.type = !this.type;    
  }

  goToHome() {
    
    console.log(this.login); 
    this.router.navigate(['/preferences']);
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

}
