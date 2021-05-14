import { ActivatedRoute } from '@angular/router';
import { CrudService } from '../../service/crud.service';

export abstract class WindowComponent {

  model: object = {}

  isNew: boolean = true;
  
  id: number;

  constructor(protected activatedRoute: ActivatedRoute, protected crudService: CrudService<object, number>) {
    this.changeNewOrUpdate();
  }

  changeNewOrUpdate(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.isNew = false;
        this.id = params['id'];
        
        this.crudService.findOne(params['id']).subscribe((res) => {
          this.model = res;
        });
      }
    });
  }
}
