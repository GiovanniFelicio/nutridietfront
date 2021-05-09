import { PersonCreateComponent } from './person-create/person-create.component';
import { EnumPersonRoutes } from './models/enum.person.routes';
import { AbstractRoutesConfig } from './../../core/routes/abstract.routes.config';
import { AbstractRoutes } from './../../core/routes/abstract.routes';
import { PersonComponent } from './person.component';

export class PersonRoutes {
    v1(): AbstractRoutes {
        return {
            windows: this.windows()
        }
    }

    private windows(): object[] {

        let routes: object[] = [];

        routes.push(new AbstractRoutesConfig(EnumPersonRoutes.PERSON, PersonComponent).toJSON())
        routes.push(new AbstractRoutesConfig(EnumPersonRoutes.PERSONCREATE, PersonCreateComponent).toJSON())

        return routes
    }
}