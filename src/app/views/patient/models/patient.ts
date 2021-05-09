import { AbstractModel } from 'src/app/core/interfaces/abstract.model';
import { Person } from '../../person/models/person';

export interface Patient extends AbstractModel{
    person: Person;
}