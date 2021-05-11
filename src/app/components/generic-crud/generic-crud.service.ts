import { ComponentService } from './../component.service';
import { Injectable, ViewContainerRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GenericCrudService {

  constructor(private componentService: ComponentService) { }

}
