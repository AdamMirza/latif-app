import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {
  private _isPurchaseClicked = new BehaviorSubject<boolean>(false);
  public isPurchaseClicked = this._isPurchaseClicked.asObservable();

  constructor() {
  }

  clickPurchase() {
    console.log("purchasing in the service!");
    this._isPurchaseClicked.next(true);
    console.log(this._isPurchaseClicked.subscribe(message => console.log(message)));
  }

  closePurchase() {
    console.log("closing in the service!");
    this._isPurchaseClicked.next(false);
  }
}
