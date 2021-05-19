import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from '../../service/crud.service';

export abstract class WindowComponent<T> {

  model: T;

  simpleContext = {isNew: true}

  constructor(protected router: Router, 
      protected _activatedRoute: ActivatedRoute, 
      protected _crudService: CrudService<T, number>,
      // protected _snackBar: MatSnackBar
      ) {
    this.changeNewOrUpdate();
  }

  changeNewOrUpdate(): void {
    this._activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.simpleContext.isNew = false;
        this.simpleContext['id'] = params['id'];

        this._crudService._findOne(params['id']);
      }
    });
  }
}
