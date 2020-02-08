import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-purchase-modal',
  templateUrl: './purchase-modal.component.html',
  styleUrls: ['./purchase-modal.component.css']
})
export class PurchaseModalComponent implements OnInit {

  isPurchasedClicked: boolean;

  constructor(private purchaseService: PurchaseService) {
  }

  ngOnInit() {
    this.purchaseService.isPurchaseClicked.subscribe(purchase => this.isPurchasedClicked = purchase);
  }

  closeModal() {
    console.log("closing");
    this.purchaseService.closePurchase();
  }

}
