import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { IPage } from '../model/generic';
import { IUser, IUser2Send } from '../model/user-interface';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private entityURL = '/user';
  url: string = ""

  constructor(
    private oHttp: HttpClient

  ) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUserPlist(page: number, size: number, termino: string,
    strSortField: string, strOrderDirection: string, id_tipousuario: number): Observable<IPage<IUser>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
      if (id_tipousuario != 0) {
        params = params.set("tipousuario", id_tipousuario);
      }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }

    }
    return this.oHttp.get<IPage<IUser>>(this.url, { params: params });
  }

  getOne(id: number): Observable<IUser> {
    return this.oHttp.get<IUser>(this.url + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id);
  }

  updateOne(oUser2Send: IUser2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oUser2Send);
  }

  newOne(oUser2Send: IUser2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oUser2Send);
  }

  generate(): Observable<IUser> {
    return this.oHttp.post<IUser>(this.url + "/generate", null);
  }

}



