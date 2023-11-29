import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SwiperComponent } from "swiper/angular";
import SwiperCore, { EffectCube, Pagination, SwiperOptions, Keyboard, Swiper, Virtual } from "swiper";
import { Router } from '@angular/router';
SwiperCore.use([EffectCube, Pagination, Virtual]);
@Component({
  selector: 'app-swipper',
  templateUrl: './swipper.page.html',
  styleUrls: ['./swipper.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SwipperPage implements OnInit {
  activeIndex;
  @ViewChild('swiper', { static: true }) swiper: SwiperComponent;
  constructor(private router : Router) { }

  ngOnInit() {
  }


  onSwiper(swiper) {


  }
  onSlideChange() {

  }

  next() {
    this.swiper.swiperRef.slideNext(5000);
  }

  pre() {
    this.swiper.swiperRef.slidePrev(5000);
  }

  skip() {
    localStorage.setItem("onboarding", "true");
    this.router.navigate(['/login'])
  }

  login() {
    localStorage.setItem("onboarding", "true");
    this.router.navigate(['/login'])
  }
}
