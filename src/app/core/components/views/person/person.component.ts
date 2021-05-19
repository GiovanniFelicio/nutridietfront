import { Person } from './../../../common/models/person/person';
import { PersonService } from './person.service';
import { EnumPersonPath } from '../../../common/enum/person/enum-person.path';
import { Router } from '@angular/router';
import { Component, OnInit, Type } from '@angular/core';
import { NDDataTableColumn } from 'src/app/share/datatable-server-side/datatable-server-side.column';
import { AbstractWindows } from '../../window/models/abstract-windows';

@Component({
  selector: 'nd-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit, AbstractWindows {

  private columns: NDDataTableColumn[] = []

  model: Person = new Person();

  constructor(private _router: Router) {}

  ngOnInit(): void {
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

  goToManagerCreate(): void {
    this._router.navigate([EnumPersonPath.PERSONMODULE.concat(EnumPersonPath.PERSONMANAGER)]);
  }
}
