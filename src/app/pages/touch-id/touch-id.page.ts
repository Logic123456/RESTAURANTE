import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-touch-id',
  templateUrl: './touch-id.page.html',
  styleUrls: ['./touch-id.page.scss'],
})
export class TouchIdPage implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }

  facebookLogin() {
    console.log("Facebook");
    //this.router.navigate(['setting']);
  }

  twitterLogin() {
    console.log("Twitter");
    //this.router.navigate(['setting']);
  }

  gmailLogin() {
    console.log("Gmail");
    //this.router.navigate(['setting']);
  }

  faceLogin() {
    console.log("Face Login");
    this.router.navigate(['/face-id']);
  }

  emailLogin() {    
    this.router.navigate(['/login']);
  }


}
