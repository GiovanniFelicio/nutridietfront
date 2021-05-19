import { EnumPersonPath } from '../../../core/common/enum/person/enum-person.path';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { paths } from '../../../core/api/environments';
import { ApiService } from '../../../core/service/api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private apiService: ApiService, 
    private __router: Router,
    private __snackBar: MatSnackBar) {}

  login(username: string, password: string) {

    let data = {
      username: username,
      password: password
    }

    this.apiService.request(paths.auth.login(), data)
      .subscribe(
        res => {
          if (res['response_error']) {
            let rd = res['response_error'];
            let clazz = rd['status'] >= 500 ? 'dialog-danger' : 'dialog-warning';
            let message = rd['message']
            
            this.__snackBar.open(message, 'X', this.getSnackBarConfig(clazz))
          } else {
            localStorage.setItem('token', res['access']);

            this.__router.navigate([EnumPersonPath.PERSONMODULE+EnumPersonPath.PERSON]);
          }
        }
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.__router.navigate(['auth']);
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
