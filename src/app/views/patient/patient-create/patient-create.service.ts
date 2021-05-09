import { ComponentService } from './../../../components/component.service';
import { Injectable, ViewContainerRef, ComponentFactoryResolver, Type, TemplateRef, ViewRef, ComponentRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientCreateService {

  constructor(private componentService: ComponentService) { }

  _configFooter<C>(ndfooter: ViewContainerRef, buttonsFooter: Type<C>) {
    let component = this.componentService.createComponent<C>(ndfooter, buttonsFooter);

    this._getConfigFooterComponent(component.instance);
  }

  private _getConfigFooterComponent<C>(component: C): C {
    component['isCancel'].rendered = true;
    component['isSave'].rendered = true;

    return component;
  }
}
