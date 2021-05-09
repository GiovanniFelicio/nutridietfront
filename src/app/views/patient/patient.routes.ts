import { EnumPatientRoutes } from './models/enum.patient.routes';
import { PatientCreateComponent } from './patient-create/patient-create.component';
import { AbstractRoutesConfig } from './../../core/routes/abstract.routes.config';
import { AbstractRoutes } from './../../core/routes/abstract.routes';
import { PatientComponent } from './patient.component';

export class PatientRoutes {
    v1(): AbstractRoutes {
        return {
            windows: this.windows()
        }
    }

    private windows(): object[] {

        let routes: object[] = [];

        routes.push(new AbstractRoutesConfig(EnumPatientRoutes.PATIENT, PatientComponent).toJSON())
        routes.push(new AbstractRoutesConfig(EnumPatientRoutes.PATIENTCREATE, PatientCreateComponent).toJSON())
        
        return routes
    }
}