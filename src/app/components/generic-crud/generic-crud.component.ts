import { GenericCreateComponent } from './generic-create/generic-create.component';
import { Location } from '@angular/common';
import { ButtonsComponent } from 'src/app/components/template/footer/buttons/buttons.component';
import { GenericCrudService } from './generic-crud.service';
import { AbstractFieldCrud } from './../../core/interfaces/abstract-field-crud';
import { EnumOperation } from '../../core/enums/enum-operation';
import { Component, OnInit, Input, ViewContainerRef, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AbstractModelCrud } from 'src/app/core/interfaces/abstract-model-crud';
import 'reflect-metadata'


@Component({
  selector: 'nd-generic-crud',
  templateUrl: './generic-crud.component.html',
  styleUrls: ['./generic-crud.component.css']
})
export class GenericCrudComponent implements OnInit {

  @Input() operations: EnumOperation[];

  @Input() model: AbstractModelCrud;  

  @ViewChild('main', { read: ViewContainerRef})
  main: ViewContainerRef;

  constructor(private genericCrudService: GenericCrudService, 
    private location: Location,
    private _resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    let t: Array<AbstractFieldCrud> = Reflect.getMetadata('fields', this.model);
  }

  ngAfterViewInit() {

  }

  isCreate(): boolean {
    return this.operations.includes(EnumOperation.CREATE);
  }

  goToCreate(): void {
    if (this.isCreate()) {
      // const factory = this._resolver.resolveComponentFactory(GenericCreateComponent);
      // this.main.clear();
      // this.main.createComponent(factory);
    }
  }

  back (): void {
    this.location.back();
  }
}
