import { PersonAddress } from './person-address';
import { PersonEmail } from './person-email';
import { EnumGenre } from './enum-genre';
import { EnumStatus } from './../../../models/enum/enum-status';
import { AbstractModel } from "src/app/core/models/abstract-model";

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

}