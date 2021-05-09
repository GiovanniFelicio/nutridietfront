import { EnumPatientRoutes } from './models/enum.patient.routes';
import { Router } from '@angular/router';
import { ComponentService } from './../../components/component.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable, ViewContainerRef, Type } from '@angular/core';
import { AbstractWindowsService } from 'src/app/core/interfaces/abstract.windows.service';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PatientService extends AbstractWindowsService{

  constructor(private _snackBar: MatSnackBar, private componentService: ComponentService) {
    super();
  }

  showMessage(msg: string) {
    this._snackBar.open(msg, '', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  _configFooter<C>(ndfooter: ViewContainerRef, buttonsFooter: Type<C>) {
    let component = this.componentService.createComponent<C>(ndfooter, buttonsFooter);

    this._getConfigFooterComponent(component.instance);
  }

  private _getConfigFooterComponent<C>(component: C): C {
    component['isNew'].rendered = true;
    component['isNew'].action = this._new;

    component['isBack'].rendered = true;
    component['isBack'].action = this._back;

    return component;
  }

  _new(_router: Router): void {
    _router.navigate([EnumPatientRoutes.PATIENTCREATE]);
  }

  _back(location: Location) {
    location.back();
  }
}
