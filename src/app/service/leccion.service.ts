import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { IPage } from '../model/generic';
import { ILeccion, ILeccion2Send } from '../model/leccion-interface';


@Injectable({
  providedIn: 'root'
})
export class LeccionService {

  private entityURL = '/leccion';
  url: string = "";

  constructor(
    private oHttp: HttpClient

  ) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getLeccionPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string, id_curso: number): Observable<IPage<ILeccion>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_curso != 0) {
        params = params.set("curso", id_curso);
      }
      if (strSortField != "") { //&sort=codigo,[asc|desc]
        if (strOrderDirection != "") {
          params = params.set("sort", strSortField + "," + strOrderDirection);
        } else {
          params = params.set("sort", strSortField);
        }
      }
    return this.oHttp.get<IPage<ILeccion>>(this.url, { withCredentials: true, params: params });
  }

  getOne(id: number): Observable<ILeccion> {
    return this.oHttp.get<ILeccion>(this.url + "/" + id, { withCredentials: true });
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id, { withCredentials: true });
  }

  updateOne(oLeccion2Send: ILeccion2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oLeccion2Send, { withCredentials: true });
  }

  newOne(oLeccion2Send: ILeccion2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oLeccion2Send, { withCredentials: true });
  }



}
