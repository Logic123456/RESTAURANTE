import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-id',
  templateUrl: './face-id.page.html',
  styleUrls: ['./face-id.page.scss'],
})
export class FaceIdPage implements OnInit {

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

  touchLogin() {
    console.log("Face Login");
    this.router.navigate(['/touch-id']);
  }

  emailLogin() {    
    this.router.navigate(['/login']);
  }

}
