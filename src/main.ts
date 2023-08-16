import 'zone.js/dist/zone';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <div class="container">
     <div class="dropdown-header" (click)="openDropDown()">
       <div class="title"> title</div>
       <div class="arrow"> < </div>
     </div>
     <div class="dropdown-body" *ngIf="isShow" (scroll)="scollDiv()">
        <div class="div-sec" *ngFor="let opt of listItems">
          <p> {{opt}}</p>
        </div>
     </div>
    <div>
  `,
})
export class App {
  name = 'Angular';
  isShow: boolean = false;
  listItems = ["option1", "option2", "option3", "option4", "option5", "option1"]

  openDropDown() {
    this.isShow = !this.isShow;
    this.listItems = ["option1", "option2", "option3", "option4", "option5", "option1"]
  }
  scollDiv() {
    const divScroll:any = document.querySelector("dropdown-body")
    // alert('jes');
    // if (window.scrollY > (divScroll.offsetHeight - window.outerHeight)) {
    //   console.log("Infinite Scrolling Enabled!");
    //   divScroll.style.height = divScroll.offsetHeight + 200 + "px";
    //  }
    this.listItems = this.listItems.concat(["option11", "option21", "option31", "option41", "option51", "option11"])
  }
}

bootstrapApplication(App);
