import { environments } from './../../../api/environments';
import { PersonManagerComponent } from '../person-manager/person-manager.component';
import { PersonComponent } from './../person.component';
import { AbstractRoutes } from './../../../models/abstract.routes';

export class EnumPersonRoutes {

    static PERSONMODULE = 'core/';

    static PERSONAPIV1 = `${environments.api.v1.baseUrl}${environments.module.core}person/`;

    static PERSON: AbstractRoutes = {path: 'person', component: PersonComponent, data: {header: "Pessoas"}}
    static PERSONMANAGER: AbstractRoutes = {path: 'person/manager', component: PersonManagerComponent, data:{header: "Gerenciamento de Pessoas"}}
    static PERSONMANAGERID: AbstractRoutes = {path: 'person/manager/:id', component: PersonManagerComponent, data:{header: "Gerenciamento de Pessoas"}}
}