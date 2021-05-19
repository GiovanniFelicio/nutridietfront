import { AbstractPath } from './../../core/api/abstract-path';
import { ApiService } from './../../core/service/api.service';
import { DataTable } from './datatable-server-side';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor(private __apiService: ApiService) { }

  getData(path: AbstractPath, dataTablesParameters): Observable<DataTable> {
    return this.__apiService.request(path, dataTablesParameters)
  }
}
