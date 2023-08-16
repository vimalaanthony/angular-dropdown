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
        <ng-container *ngFor="let opt of listItems">
          <p> {{opt}}</p>
        </ng-container>
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
  }
  scollDiv() {
    alert('jes');
  }
}

bootstrapApplication(App);
