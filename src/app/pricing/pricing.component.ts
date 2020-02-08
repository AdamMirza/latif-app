import { Component, OnInit } from '@angular/core';
import { PurchaseService } from '../purchase.service';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.css']
})
export class PricingComponent implements OnInit {

  isPurchasedClicked: boolean;

  serviceList = new Array<ServiceClass>();

  constructor(private purchaseService: PurchaseService) {
  }

  ngOnInit() {
    this.generateServices();
    this.purchaseService.isPurchaseClicked.subscribe(purchase => this.isPurchasedClicked = purchase);
  }

  generateServices() {
    this.serviceList.push(new ServiceClass("Planning", 199, "Plan how you want your space to look. Includes interior design.", "https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"));
    this.serviceList.push(new ServiceClass("Roofing", 299, "Fix that leaky roof and make it good to go with our supreme services.", "https://images.unsplash.com/photo-1555002474-6244d85b4bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"));
    this.serviceList.push(new ServiceClass("Remodeling", 499, "Improve your broken, damaged, or outdated structure.", "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"));
  }

  selectPlan() {
    console.log("opening");
    this.purchaseService.clickPurchase();
  }
}


export class ServiceClass {
  title: string;
  price: number;
  description: string;
  url: string;

  constructor(title: string, price: number, description: string, url: string) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.url = url;
  }
}