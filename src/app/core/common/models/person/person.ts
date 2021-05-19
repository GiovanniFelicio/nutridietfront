import { paths } from 'src/app/core/api/environments';
import { PersonAddress } from './person-address';
import { PersonEmail } from './person-email';
import { EnumGenre } from '../../enum/person/enum-genre';
import { EnumStatus } from '../../../common/enum/enum-status';
import { AbstractModel } from "src/app/core/common/models/abstract-model";

export class Person extends AbstractModel {

    code: number;
    name: string;
    date_birth: string;
    document: string;
    document_type: string;
    emails: PersonEmail[];
    gender: EnumGenre;    
    status: EnumStatus;
    person_address: PersonAddress;

    get path() {
        return paths.person.base
    }

}