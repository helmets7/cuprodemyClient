
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL } from "src/environments/environment";
import { ITipocomentario, ITipocomentario2Send } from "../model/tipo-comentario-interface";
import { IPage } from "../model/generic";


@Injectable({
  providedIn: 'root'
})
export class TipocomentarioService {

    private entityURL = '/tipocomentario';
  url: string="";

  constructor(
    private oHttp: HttpClient

  ) {
    this.url = `${baseURL}${this.entityURL}`;
  }


    getTipocomentarioPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ITipocomentario>>{
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

      return this.oHttp.get<IPage<ITipocomentario>>(this.url,{withCredentials:true, params: params});
    }

    getOne(id: number): Observable<ITipocomentario> {
      return this.oHttp.get<ITipocomentario>(`${baseURL}${this.entityURL}` + "/" + id,{withCredentials:true});
    }

    removeOne(id: number): Observable<number> {
      return this.oHttp.delete<number>(this.url + '/' + id, { withCredentials: true });
    }

    updateOne(oTipocomentario2Send: ITipocomentario2Send): Observable<number> {
      return this.oHttp.put<number>(this.url, oTipocomentario2Send, { withCredentials: true });
    }

    newOne(oTipocomentario2Send: ITipocomentario2Send): Observable<number> {
      return this.oHttp.post<number>(this.url, oTipocomentario2Send, { withCredentials: true });
    }
}
