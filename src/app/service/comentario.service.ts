import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { IPage } from '../model/generic';
import { IComentario, IComentario2Send } from '../model/comentario-interface';


@Injectable({
  providedIn: 'root'
})
export class ComentarioService {

  private entityURL = '/comentario';
  url: string = "";

  constructor(
    private oHttp: HttpClient

  ) {
    this.url = `${baseURL}${this.entityURL}`;
    console.log(this.url);
  }

  getComentarioPlist(page: number, size: number, termino: string,
    strSortField: string, strOrderDirection: string, id_tipocomentario: number, id_usuario: number, id_curso: number): Observable<IPage<IComentario>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_tipocomentario != 0) {
        params = params.set("tipocomentario", id_tipocomentario);
      }
      if (id_usuario != 0) {
        params = params.set("usuario", id_usuario);
      }
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
    console.log(this.url)
    return this.oHttp.get<IPage<IComentario>>(this.url, { withCredentials: true,params: params });
  }


  getOne(id: number): Observable<IComentario> {
    return this.oHttp.get<IComentario>(this.url + "/" + id, { withCredentials: true });
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id, { withCredentials: true });
  }

  updateOne(oComentario2Send: IComentario2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oComentario2Send, { withCredentials: true });
  }

  newOne(oComentario2Send: IComentario2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oComentario2Send, { withCredentials: true });
  }

  generate(): Observable<IComentario> {
    return this.oHttp.post<IComentario>(this.url + "/generate", null, { withCredentials: true });
  }
}
