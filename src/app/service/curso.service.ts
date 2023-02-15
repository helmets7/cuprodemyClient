import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { baseURL } from 'src/environments/environment';
import { ICurso, ICurso2Send } from '../model/curso-interface';
import { IPage } from '../model/generic';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private entityURL = '/curso';
  url : string = '';

  constructor(
    private oHttp : HttpClient
  ) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getCursoPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ICurso>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }

    }
    return this.oHttp.get<IPage<ICurso>>(this.url, { withCredentials: true,params: params });
  }

  getOne(id: number): Observable<ICurso> {
    return this.oHttp.get<ICurso>(this.url + "/" + id, { withCredentials: true });
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id, { withCredentials: true });
  }

  updateOne(oCurso2Send: ICurso2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oCurso2Send, { withCredentials: true });
  }

  newOne(oCurso2Send: ICurso2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oCurso2Send, { withCredentials: true });
  }

  generate(): Observable<ICurso> {
    return this.oHttp.post<ICurso>(this.url + "/generate", null, { withCredentials: true });
  }




}
