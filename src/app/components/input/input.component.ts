import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  private type: string;

  private name: string;

  constructor() { }

  ngOnInit(): void {
  }

  getType(): string {
    return this.type;
  }

  getName(): string {
    return this.name;
  }
}
