import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private _snackBar: MatSnackBar) {
    console.log('MessageService')
  }

  open(message: string, color: string) {
    this._snackBar.open(message, 'X', {
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: [color]
    })
  }
}
