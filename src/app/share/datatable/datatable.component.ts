import { DatatableService } from './datatable.service';
import { NDDataTableColumn } from 'src/app/share/datatable/datatable.column';
import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'nd-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent implements OnInit {

  @Input() model: any;

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

    this.dtOptions = {
      pagingType: 'full_numbers',
      serverSide: true,
      processing: true,
      columns: _columns,
      responsive: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.datatableService.getData(dataTablesParameters).subscribe(resp => {
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