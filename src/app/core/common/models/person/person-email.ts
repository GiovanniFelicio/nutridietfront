import { EnumType } from '../../../common/enum/enum-type';
import { EnumStatus } from '../../../common/enum/enum-status';
import { AbstractModel } from 'src/app/core/common/models/abstract-model';

export class PersonEmail extends AbstractModel {

    reference: string;
    email: string;
    type: EnumType;
    status: EnumStatus;

    get path() {
        return undefined
    }
}