import { EnumPersonRoutes } from './models/enum.person.routes';
import { Router } from '@angular/router';
import { ComponentService } from './../../components/component.service';
import { Injectable, ViewContainerRef, Type } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private componentService: ComponentService) { }

  _configFooter<C>(ndfooter: ViewContainerRef, buttonsFooter: Type<C>) {
    let component = this.componentService.createComponent<C>(ndfooter, buttonsFooter);

    this._getConfigFooterComponent(component.instance);
  }

  private _getConfigFooterComponent<C>(component: C): C {
    component['isNew'].rendered = true;
    component['isNew'].action = this._new;

    component['isBack'].rendered = true;

    return component;
  }

  private _new (_router:Router) {
    _router.navigate([EnumPersonRoutes.PERSONCREATE]);
  }
}
