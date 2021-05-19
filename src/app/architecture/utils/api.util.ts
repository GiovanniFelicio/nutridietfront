import { ServiceLocator } from './../service/locator.service';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { ArchitectureModule } from '../architecture.module';

export class ApiUtil{

    public static getReturnAPI(obs: Observable<any>) {
        const subject = new Subject<any>();

        obs.subscribe(
            (res) => {
                subject.next(res);
            },
            (error: HttpErrorResponse) => {
                let message = `${error.status} - ${error.statusText}: ${error.error.detail}`;
                let response = { status: error.status, message: message }

                subject.next({ response: response });
            });

        return subject.asObservable();
    }

    public static resolveResponse<T>(response: Observable<T>) {

        let snackBar: MatSnackBar = ServiceLocator.injector.get(MatSnackBar);

        let message = 'Unknown';
        let clazz = 'dialog-danger';

        let config: MatSnackBarConfig = {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 10000,
            panelClass: clazz
        }

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

                snackBar.open(message, 'X', config)
            }
        )
    }
}