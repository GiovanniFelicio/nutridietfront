import { AbstractPath } from './../api/abstract-path';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUtil } from 'src/app/architecture/utils/api.util';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private __http: HttpClient,
    protected _snackBar: MatSnackBar) {
  }

  request(path: AbstractPath, data?: any): Observable<any> {
    let response: Observable<any>;

    let url = `${path.base}${path.module}${path.path}${path.urn}`;

    if (path.method === 'GET') {
      response = this.get(url, data);
    } else {
      response = this.__http.request(path.method, url, {
        body: data,
        responseType: 'json',
        observe: 'body',
      });
    }
    
    return ApiUtil.getReturnAPI(response);
  }

  private get(url: string, data?: any) {

    let params = new HttpParams();
    if (data !== undefined) {
      Object.getOwnPropertyNames(data).forEach(key => {
        params = params.set(key, data[key]);
      });
    }

    return this.__http.get(url, {
      responseType: 'json',
      params
    });
  }

  resolveResponse<T>(response: Observable<T>) {

    let message = 'Unknown';
    let clazz = 'dialog-danger';

    response.subscribe(
      res => {
        let response = res['response'];
        if (response) {
          if (response['status'] < 300) {
            clazz = 'dialog-success';
          } else if (response['status'] < 500) {
            clazz = 'dialog-warning';
          }

          message = response['message']
        }
        this._snackBar.open(message, 'X', this.getSnackBarConfig(clazz))
      }
    )
  }

  private getSnackBarConfig(clazz: string): MatSnackBarConfig {
    return {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      duration: 10000,
      panelClass: clazz
    }
  }
}
