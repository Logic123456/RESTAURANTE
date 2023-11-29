import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http: HttpClient) { }


  getAllDishes(): Observable<any> {
    return this.http.get('assets/json/dish.json');
  }

  getAllNotifications(): Observable<any> {
    return this.http.get('assets/json/notification.json');
  }

  getAllPayments(): Observable<any> {
    return this.http.get('assets/json/payment.json');
  }

  getAllOrders(): Observable<any> {
    return this.http.get('assets/json/order.json');
  }

  getAllMenuDishes(): Observable<any> {
    return this.http.get('assets/json/menuDush.json');
  }

  getAllYourOrders(): Observable<any> {
    return this.http.get('assets/json/yourOrder.json');
  }

  getAllMsg(): Observable<any> {
    return this.http.get('assets/json/online.json');
  }

  getEventList(): Observable<any> {
    return this.http.get('assets/json/event.json');
  }

  getAllBlog(): Observable<any> {
    return this.http.get('assets/json/blog.json');
  }
  
}
