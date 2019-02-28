import {Component} from '@angular/core';

const HTML_TEMPLATE = `
  <button class="unlock-it-btn"
   ion-button
    full 
    icon-left 
    (click)="leavePage()">
    Click me
    </button>
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