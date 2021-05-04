import { WindowsComponent } from './../../core/windows/models/windows.component';
import { Component, OnInit } from '@angular/core';
import { NDDataTableColumn } from 'src/app/components/datatable/datatable.column';

@Component({
  selector: 'nd-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent extends WindowsComponent implements OnInit {

  columns: NDDataTableColumn[] = []  

  constructor() { 
    super()
  }

  ngOnInit(): void {

    var that = this;

    that.columns.push(new NDDataTableColumn('Name'))
    that.columns.push(new NDDataTableColumn('Birth'))
    that.columns.push(new NDDataTableColumn('Document'))
    that.columns.push(new NDDataTableColumn('Genre'))
    that.columns.push(new NDDataTableColumn('Status'))

  }

  getColumns(): NDDataTableColumn[] {
    return this.columns
  }
}
