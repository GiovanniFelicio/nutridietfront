import { AbstractRoutesConfig } from './../../core/routes/abstract.routes.config';
import { AbstractRoutes } from './../../core/routes/abstract.routes';
import { PersonComponent } from './person.component';

export class PersonRoutes {
    v1(): AbstractRoutes {
        return {
            windows: this.windows()
        }
    }

    private windows(): any[] {

        let base = new AbstractRoutesConfig('person', PersonComponent).toJSON()

        return [base]
    }
}