import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Buttons } from './buttons';
import { Location } from '@angular/common';

@Component({
  selector: 'nd-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  isNew: Buttons = {
    rendered: true
  };

  isSave: Buttons = {
    rendered: true
  };

  isCancel: Buttons = {
    rendered: true
  };

  isBack: Buttons = {
    rendered: true
  };

  constructor(private router: Router, private location: Location) { }

  ngOnInit(): void {    
    console.log(this.isNew)
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
