import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { CoreModule } from './../core.module';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(protected _http: HttpClient) { }

  findCEP(cep: number): Observable<object> {
    return this.getReturnAPI(this._http.get<object>(`https://ws.apicep.com/cep/${cep}.json`));
  }

  private getReturnAPI<T>(obs: Observable<T>): Observable<T> {
    const subject = new Subject<T>();
    let snackBar = CoreModule.injector.get(MatSnackBar);

    obs.subscribe(
      (res) => {
        if (res['status'] == 200) {
          subject.next(res);
        } else {
          let message: string = `${res['status']} - ${res['statusText']}: ${res['message']}`;
          snackBar.open(message, 'X', this.getConfigMessage('bg-warning'));
        }
      });

    return subject.asObservable();
  }

  private getConfigMessage(color: string): MatSnackBarConfig {

    return {
      horizontalPosition: 'right',
      duration: 7000,
      verticalPosition: 'top',
      panelClass: [color, 'text-white']
    }
  }
}
