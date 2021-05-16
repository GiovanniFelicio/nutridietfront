import { CoreModule } from './../../core.module';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable, Subject } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';

export abstract class WindowComponent<T> {

  model: T;

  isNew: boolean = true;

  id: number;

  constructor(protected activatedRoute: ActivatedRoute, protected crudService: CrudService<T, number>) {
    this.changeNewOrUpdate();
  }

  changeNewOrUpdate(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.isNew = false;
        this.id = params['id'];

        this.getReturnAPI(this.crudService.findOne(params['id']));

      }
    });
  }

  private getReturnAPI<T>(obs: Observable<T>): Observable<T> {
    const subject = new Subject<T>();
    let snackBar = CoreModule.injector.get(MatSnackBar);

    obs.subscribe(
      (res) => {
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
