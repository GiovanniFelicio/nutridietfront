import { Component, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'nd-root',
  templateUrl: 'app.component.html',
  styles: []
})
export class AppComponent {

  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);

  constructor(changeDetectorRef: ChangeDetectorRef) {

  }

  shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));
}
