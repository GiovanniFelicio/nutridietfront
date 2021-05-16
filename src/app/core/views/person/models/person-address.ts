import { AbstractModel } from "src/app/core/models/abstract-model";

export class PersonAddress extends AbstractModel {

    code: number;
    address: string;
    complement: string;
    number: number;
    district: string;
    city: string;
    state: string;

    static convertApiCepToPersonAddress(cep: object): PersonAddress {
        let personAddress = new PersonAddress();

        personAddress.code = cep['code'];
        personAddress.address = cep['address'];
        personAddress.complement = cep['complement'];
        personAddress.district = cep['district'];
        personAddress.city = cep['city'];
        personAddress.state = cep['state'];

        return personAddress;
    }
}