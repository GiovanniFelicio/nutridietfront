import { AbstractWindowsComponent } from './../../core/interfaces/abstract.windows.component';
import { AbstractModel } from 'src/app/core/interfaces/abstract.model';
import { Component, OnInit } from '@angular/core';
import { NDDataTableColumn } from 'src/app/components/datatable/datatable.column';
import { Person } from './person';


@Component({
  selector: 'nd-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent extends AbstractWindowsComponent implements OnInit {

  columns: NDDataTableColumn[] = []

  model: string = 'person'

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

  getModel(): AbstractModel {
    return new Person();
  }
}
