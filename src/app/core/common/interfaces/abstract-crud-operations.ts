import { Observable } from 'rxjs';


export interface AbstractCrudOperations<T,ID> {
    _save(t: T): Observable<T>;
    _update(id: ID, t: T): Observable<T>;
    _findOne(id: ID): Observable<T>;
    _findAll(): Observable<T[]>;
    _delete(id: ID): Observable<any>;
}