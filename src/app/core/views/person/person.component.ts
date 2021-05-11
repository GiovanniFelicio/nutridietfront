import { HeaderService } from './../../../share/template/header/header.service';
import { Component, OnInit } from '@angular/core';
import { NDDataTableColumn } from 'src/app/share/datatable/datatable.column';

@Component({
  selector: 'nd-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private columns: NDDataTableColumn[] = []

  private model: any;

  constructor(private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.setTitle('Pessoas');

    this.setColumns();
  }

  getColumns(): NDDataTableColumn[] {
    return this.columns;
  }

  setColumns(): void {
    this.columns.push(new NDDataTableColumn('Nome'));
    this.columns.push(new NDDataTableColumn('Data de Nascimento'));
    this.columns.push(new NDDataTableColumn('Documento'));
    this.columns.push(new NDDataTableColumn('Gênero'));
    this.columns.push(new NDDataTableColumn('Status'));
  }

  getModel(): any {
    return this.model;
  }
}
