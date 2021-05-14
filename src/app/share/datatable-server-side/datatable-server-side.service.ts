import { DataTable } from './datatable-server-side';
import { Observable, Subject, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor(private http: HttpClient) { }

  getData(_url, dataTablesParameters): Observable<DataTable> {
    return this.http.post<DataTable>(_url, dataTablesParameters)
  }
}
