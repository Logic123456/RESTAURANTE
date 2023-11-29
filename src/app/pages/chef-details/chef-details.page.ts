import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController, LoadingController, PopoverController } from '@ionic/angular';
import { AppServiceService } from 'src/app/services/app-service.service';
import { OrderPage } from '../popup/order/order.page';

@Component({
  selector: 'app-chef-details',
  templateUrl: './chef-details.page.html',
  styleUrls: ['./chef-details.page.scss'],
})
export class ChefDetailsPage implements OnInit {
  user = [];
  segId = "overview";
  dish = [];
  orders = [];
  heartIcon: string = 'heart-outline';
  constructor(public loadingController: LoadingController,private router : Router,private service: AppServiceService,public popoverController: PopoverController,public actionSheetController: ActionSheetController) { }



  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getAllMenuDishes().subscribe((res) => {
        this.user = res.document.records;
        console.log(this.user);
        
        
      });
      this.service.getAllDishes().subscribe((res) => {
        this.dish = res.document.records;
        console.log(this.dish);
      });

      this.service.getAllOrders().subscribe((res) => {
        this.orders = res.document.records;
        console.log(this.orders);
        this.loadingController.dismiss();
      });
    });
     
  }

  goToEvent() {
    this.router.navigate(['/events'])
  }

  segmentChanged(ev) {
    this.segId = ev.detail.value;
    console.log(this.segId);
    
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      message: "Please Wait .. ",
    });
    await loading.present();
  }

  home() {
    this.router.navigate(['/search-chef']);  
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: OrderPage,
      event: ev,
      mode: 'ios',
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Please Select',
      cssClass: 'my-custom-class',
      mode : "ios",
      buttons: [ {
        text: 'Add to Cart',
        icon: 'cart-outline',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Add to Favourites',
        icon: 'star-outline',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const {  data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data',  data);
  }

  
}
