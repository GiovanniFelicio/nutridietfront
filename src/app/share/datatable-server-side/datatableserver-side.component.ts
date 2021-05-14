import { DatatableService } from './datatable-server-side.service';
import { NDDataTableColumn } from 'src/app/share/datatable-server-side/datatable-server-side.column';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'nd-datatable-server-side',
  templateUrl: './datatable-server-side.component.html',
  styleUrls: ['./datatable-server-side.component.css']
})
export class DatatableServerSideComponent implements OnInit {

  @Input() base_route: string;

  @Input() columns: NDDataTableColumn[];

  dtOptions: DataTables.Settings = {}
  items: any[];
  _object = Object;

  constructor(private datatableService: DatatableService) { }

  ngOnInit(): void {

    var _columns: any[] = []

    this.columns.forEach(col => {
      _columns.push({title: col.column})
    })    

    let url = this.base_route.concat('data/');

    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      columns: _columns,
      responsive: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.datatableService.getData(url,dataTablesParameters).subscribe(resp => {
          this.items = resp.data
          callback({
            recordsTotal: resp.recordsTotal,
            recordsFiltered: resp.recordsFiltered,
            data: [],
          });
        });
      }
    };
  }
}