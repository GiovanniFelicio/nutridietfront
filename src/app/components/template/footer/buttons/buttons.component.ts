import { Router, ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { Buttons } from './buttons';
import { Location } from '@angular/common';

@Component({
  selector: 'nd-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  isNew: Buttons = {
    rendered: false
  };

  isSave: Buttons = {
    rendered: false
  };

  isCancel: Buttons = {
    rendered: false
  };

  isBack: Buttons = {
    rendered: false
  };

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {    
  }

  _new () {
    this.isNew.action(this.router);
  }

  _back () {
    this.isBack.action(this.location);
  }

  _cancel() {    
  }

  _save() {
  }
}
