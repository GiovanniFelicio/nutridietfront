import { NDDataTableColumn } from 'src/app/components/datatable/datatable.column';
import { DataTablesResponse } from './datatables-response';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Input } from '@angular/core';


@Component({
  selector: 'nd-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() model: string;

  @Input() columns: NDDataTableColumn[];

  dtOptions: DataTables.Settings = {}
  items: any[];
  _object = Object;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    var that = this;
    var _columns: any[] = []

    this.columns.forEach(col => {
      _columns.push({title: col.column})
    })

    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        that.http
          .post<DataTablesResponse>('http://127.0.0.1:8000/api/v1/person/data/', dataTablesParameters, {})
          .subscribe(resp => {
            that.items = resp.data;

            callback({
              recordsTotal: resp.recordsTotal,
              recordsFiltered: resp.recordsFiltered,
              data: [],
            });
          });
      },
      columns: _columns,
    };
  }
}