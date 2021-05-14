import { EnumType } from './../../../models/enum/enum-type';
import { EnumStatus } from './../../../models/enum/enum-status';
import { AbstractModel } from 'src/app/core/models/abstract-model';

export class PersonEmail implements AbstractModel {

    reference: string;
    email: string;
    type: EnumType;
    status: EnumStatus;

}