import { DataTable } from './datatable';
import { Observable, Subject, Subscription } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DatatableService {

  constructor(private http: HttpClient) { }

  getData(dataTablesParameters): Observable<DataTable> {
    return this.http.post<DataTable>('http://127.0.0.1:8000/api/v1/person/data/', dataTablesParameters)
  }
}
