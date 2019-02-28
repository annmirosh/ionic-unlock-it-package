import {Component} from '@angular/core';

const HTML_TEMPLATE = `
<ion-header>
  <ion-navbar color="primary">
    <ion-title>
      Ionic Unlock It
    </ion-title>
  </ion-navbar>
</ion-header>
 
<ion-content padding>
  <button class="unlock-it-btn"
   ion-button
    full 
    icon-left 
    (click)="leavePage()">
    Click me
    </button>
</ion-content>
`;

const CSS_STYLE = `
.unlock-it-btn {
    background-color: red;
}
`;

@Component({
    selector: 'unlock-it',
    template: HTML_TEMPLATE,
    styles: [CSS_STYLE]
})
export class UnlockItComponent {
    constructor() {
    }

    leavePage() {
        alert(1);
    }
}