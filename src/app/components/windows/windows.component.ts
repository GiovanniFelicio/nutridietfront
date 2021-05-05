import { Component, OnInit } from '@angular/core';
import { NDDataTableColumn } from 'src/app/components/datatable/datatable.column';
import { AbstractWindows } from 'src/app/core/interfaces/abstract.windows';
import { Windows } from './windows';

@Component({
  selector: 'nd-ndwindows',
  templateUrl: './windows.component.html',
  styleUrls: ['./windows.component.css']
})
export class WindowsComponent extends AbstractWindows implements OnInit {

  columns: NDDataTableColumn[] = []

  constructor() { 
    super()
  }

  ngOnInit(): void {

    var that = this;

    that.columns.push(new NDDataTableColumn('Name'))

  }

  getColumns(): NDDataTableColumn[] {
    return this.columns
  }

  getModel(): Windows {
    return new Windows()
  }

}
