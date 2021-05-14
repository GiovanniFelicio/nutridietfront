import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { AbstractCrudOperations } from './../models/interfaces/abstract-crud-operations';
import { Injector } from '@angular/core';

export abstract class CrudService<T, ID> implements AbstractCrudOperations<T, ID>{

  private _snackBar: MatSnackBar;

  constructor(protected _http: HttpClient, protected _url: string, protected injector: Injector) {
    this._snackBar = this.injector.get(MatSnackBar);
  }

  save(t: T): Observable<T> {
    return this.getReturn(this._http.post<T>(this._url, t));
  }

  update(id: ID, t: T): Observable<T> {
    return this.getReturn(this._http.put<T>(this._url+id+'/', t, {}));
  }

  findOne(id: ID): Observable<T> {
    return this._http.get<T>(this._url+id+'/');
  }

  findAll(): Observable<T[]> {
    return null;
  }

  delete(id: ID): Observable<any> {
    return null;
  }

  private open(message: string, color: string) {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'right',
      duration: 7000,
      verticalPosition: 'top',
      panelClass: [color, 'text-white']
    })
  }

  private getReturn<T>(obs: Observable<T>) {
    const subject = new Subject<T>();

    obs.subscribe(
      (res) => {
        if (res) {
          this.open(res['message'], 'bg-success');
        }
        subject.next(res);
      },
      (error: HttpErrorResponse) => {
        let message = `${error.status} - ${error.statusText}: ${error.error.detail}`;
        let color = error.status >= 500 ? 'bg-danger' : 'bg-warning';

        this.open(message, color);
      });

    return subject.asObservable();
  }
}
