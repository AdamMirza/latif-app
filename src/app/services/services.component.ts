import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  serviceList = new Array<ServiceClass>();
  selectedIndex: number = null;

  constructor() { }

  ngOnInit() {
    this.generateServices();
  }

  generateServices() {
    for (let i = 0; i < 10; i++) {
      this.serviceList.push(new ServiceClass("Service " + i, "This is a description for service #" + i, i));
    }
  }

  activateClass(service){
    service.active = !service.active;
  }

  setIndex(index: number) {
    if (this.selectedIndex == index) {
      this.selectedIndex = -1;
    }
    else {
      this.selectedIndex = index;
    }
  }

  removeIndex() {
    this.selectedIndex = -1;
  }

}

export class ServiceClass {
  title: string;
  description: string;
  infoText: number;
  
  constructor(title: string, description: string, infoText: number) {
    this.title = title;
    this.description = description;
    this.infoText = infoText;
  }
}