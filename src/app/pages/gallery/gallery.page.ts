import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {
  images = ['/food/001.jfif','/food/001.JPG','/food/002.JPG','/food/003.JPG','/food/004.JPG','/food/005.JPG','/food/006.JPG','/food/007.JPG','/food/008.JPG','/001.JPG','/002.JPG','/003.JPG','/chef.png','/chef2.png','/chef3.jpg','/chef4.png',];
  constructor() { }

  ngOnInit() {
  }

}
