import { PersonService } from './person.service';
import { EnumPersonRoutes } from './models/enum-person.routes';
import { Router } from '@angular/router';
import { Person } from './models/person';
import { HeaderService } from './../../../share/template/header/header.service';
import { Component, OnInit, Type } from '@angular/core';
import { NDDataTableColumn } from 'src/app/share/datatable-server-side/datatable-server-side.column';
import { AbstractWindows } from '../../components/window/models/abstract-windows';

@Component({
  selector: 'nd-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css'],
  providers:[PersonService]
})
export class PersonComponent implements OnInit, AbstractWindows {

  private columns: NDDataTableColumn[] = []

  model: Type<Person> = Person;

  base_route: string = EnumPersonRoutes.PERSONAPIV1;

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
    this._router.navigate([EnumPersonRoutes.PERSONMODULE.concat(EnumPersonRoutes.PERSONMANAGER.path)]);
  }
}
