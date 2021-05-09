import { ComponentFactoryResolver, ComponentRef, Injectable, Injector, Type, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private _resolver: ComponentFactoryResolver) { }

  createComponent<C>(container: ViewContainerRef, content: Type<C>, idx?: number, injector?: Injector): ComponentRef<C> {
    let factory = this._resolver.resolveComponentFactory(content);    
    let component = container.createComponent<C>(factory, idx, injector);

    return component;
  }
}
