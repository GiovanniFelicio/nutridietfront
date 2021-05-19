// import { CoreModule } from '../core.module';
// import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Observable, Subject } from 'rxjs';
// import { Injectable } from '@angular/core';

// @Injectable({
//     providedIn: 'root'
// })
// export class ObservableUtil {

//     constructor (public snackBar: MatSnackBar) {
//     }

//     public getReturnAPI<T>(obs: Observable<T>): Observable<T> {
//         const subject = new Subject<T>();

//         obs.subscribe(
//             (res) => {            
//                 this.snackBar.open(res['message'], 'X', this.getConfigMessage('bg-success'));
//                 subject.next(res);
//             },
//             (error: HttpErrorResponse) => {
//                 let message = `${error.status} - ${error.statusText}: ${error.error.detail}`;
//                 let color = error.status >= 500 ? 'dialog-danger' : 'dialog-warning';

//                 this.snackBar.open(message, 'X', this.getConfigMessage(color));
//             });

//         return subject.asObservable();
//     }

//     private getConfigMessage(color: string): MatSnackBarConfig {
        
//         return {
//             horizontalPosition: 'right',
//             duration: 10000,
//             verticalPosition: 'top',
//             panelClass: [color]
//         }
//     }

// }