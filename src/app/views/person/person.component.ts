import { PersonService } from './person.service';
import { AbstractModel } from 'src/app/core/interfaces/abstract.model';
import { Component, OnInit, ViewContainerRef, ViewChild } from '@angular/core';
import { NDDataTableColumn } from 'src/app/components/datatable/datatable.column';
import { Person } from './models/person';
import { ButtonsComponent } from 'src/app/components/template/footer/buttons/buttons.component';


@Component({
  selector: 'nd-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  columns: NDDataTableColumn[] = []

  model: Person;

  @ViewChild('ndfooter', { read: ViewContainerRef})
  ndfooter: ViewContainerRef;

  constructor(private personService: PersonService) {}

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
    return this.model;
  }

  ngAfterViewInit() {
    this.personService._configFooter(this.ndfooter, ButtonsComponent);
  }
}
