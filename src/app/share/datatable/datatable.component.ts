import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'nd-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit, OnChanges{  

  @Input() columns: string[];

  @Input() content: Array<string[]>;

  private _columns: string[];

  private _content: Array<string[]>;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    this._columns = this.columns;
    this._content = this.content
  }

  getColumns () {
    return this._columns;
  }

  getContent() {
    return this._content;
  }
}
