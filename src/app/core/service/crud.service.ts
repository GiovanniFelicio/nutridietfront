import { AbstractPath } from './../api/abstract-path';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AbstractCrudOperations } from '../common/interfaces/abstract-crud-operations';
import { ApiUtil } from 'src/app/architecture/utils/api.util';

export abstract class CrudService<T, ID> implements AbstractCrudOperations<T, ID>{

  private __url: string;

  constructor(protected _http: HttpClient, 
      protected _path: AbstractPath) {
      this.__url = `${_path.base}${_path.module}${_path.path}`
  }

  _save(t: T): Observable<T> {

    let response = ApiUtil.getReturnAPI(this._http.post<T>(this.__url, t));

    ApiUtil.resolveResponse(response);

    return response;
  }

  _update(id: ID, t: T): Observable<T> {
    return ApiUtil.getReturnAPI(this._http.put<T>(this.__url+id+'/', t, {}));
  }

  _findOne(id: ID): Observable<T> {
    return ApiUtil.getReturnAPI(this._http.get<T>(this.__url+id+'/'));
  }

  _findAll(): Observable<T[]> {
    return null;
  }

  _delete(id: ID): Observable<any> {
    return null;
  }
}
