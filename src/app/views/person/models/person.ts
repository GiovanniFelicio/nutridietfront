import { AbstractModel } from "src/app/core/interfaces/abstract.model";

export class Person extends AbstractModel{
    name: string
    date_birth: Date
    document: string
    genre: string
    status: string
}