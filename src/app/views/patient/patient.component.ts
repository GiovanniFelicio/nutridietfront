import { ButtonsComponent } from './../../components/template/footer/buttons/buttons.component';
import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { NDDataTableColumn } from 'src/app/components/datatable/datatable.column';
import { Patient } from './models/patient';
import { PatientService } from './patient.service';


@Component({
  selector: 'nd-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  columns: NDDataTableColumn[] = []

  model: Patient;

  @ViewChild('ndfooter', { read: ViewContainerRef})
  ndfooter: ViewContainerRef;

  private buttonsFooter = ButtonsComponent;

  constructor(private patientService: PatientService) {}

  ngOnInit(): void {    
  }

  ngAfterViewInit() {
    this.patientService._configFooter(this.ndfooter, this.buttonsFooter);
  }

  getColumns(): NDDataTableColumn[] {
    return this.columns
  }

  getModel(): Patient {
    return this.model;
  }
}
