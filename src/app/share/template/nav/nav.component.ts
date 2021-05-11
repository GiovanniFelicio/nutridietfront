import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { NavbarComponent } from 'angular-bootstrap-md'

@Component({
  selector: 'nd-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  inds: string[] = ['One', 'Two', 'Three'];

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.inds.filter(option => option.toLowerCase().includes(filterValue));
  }

}
