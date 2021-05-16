import { CoreModule } from './../core.module';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export class ObservableUtil {

    public getReturnAPI<T>(obs: Observable<T>): Observable<T> {
        const subject = new Subject<T>();
        let snackBar = CoreModule.injector.get(MatSnackBar);

        obs.subscribe(
            (res) => {            
                snackBar.open(res['message'], 'X', this.getConfigMessage('bg-success'));
                subject.next(res);
            },
            (error: HttpErrorResponse) => {
                let message = `${error.status} - ${error.statusText}: ${error.error.detail}`;
                let color = error.status >= 500 ? 'dialog-danger' : 'dialog-warning';

                snackBar.open(message, 'X', this.getConfigMessage(color));
            });

        return subject.asObservable();
    }

    private getConfigMessage(color: string): MatSnackBarConfig {
        
        return {
            horizontalPosition: 'right',
            duration: 10000,
            verticalPosition: 'top',
            panelClass: [color]
        }
    }

}