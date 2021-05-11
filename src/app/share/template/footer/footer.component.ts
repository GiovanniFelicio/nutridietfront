import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'nd-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @ViewChild('footer') footer: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

}
