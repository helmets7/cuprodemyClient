import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { baseURL, httpOptions } from 'src/environments/environment';
import { Observable, Subject, filter, map, Subscription } from 'rxjs';
import { IToken } from '../model/token-interface';
import { DecodeService } from './decode.service';
import { CryptoService } from './crypto.service';

export enum Events {
    login,
    logout
}

export class EmitEvent {
    constructor(public event: Events, public token?: string) { }
}

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  private entityURL = '/session';
  url: string = `${baseURL}${this.entityURL}`;
  subject = new Subject<EmitEvent>();

  constructor(
    private http: HttpClient,
    private oDecodeService: DecodeService,
    private oCryptoService: CryptoService,

  ) { }

  login(strLogin: string, strPassword: string): Observable<string> {
    const loginData = JSON.stringify({ nickname: strLogin, pass: this.oCryptoService.getSHA256(strPassword) });
    return this.http.post<string>(this.url, loginData, httpOptions);
}


  getUserName(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            let token: string = localStorage.getItem("token");
            return this.oDecodeService.parseJwt(token).name;
        }
    }

    getUserId(): Observable<number> {
      return this.http.get<number>(this.url + "/getId"); //añadir "usuario" en el "getId"
    }



    getToken(): string {
        return localStorage.getItem("token");
    }

    isSessionActive(): Boolean {
        let strToken: string = localStorage.getItem("token");
        if (strToken) {
            let oDecodedToken: IToken = this.oDecodeService.parseJwt(strToken);
            if (Date.now() >= oDecodedToken.exp * 1000) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    getTipousuario(): string {
      if (!this.isSessionActive()) {
          return "";
      } else {
          let token: string = localStorage.getItem("token");
          return this.oDecodeService.parseJwt(token).tipousuario;
      }
  }

    logout() {
        localStorage.removeItem("token");
    }

    on(event: Events): Observable<String> {
        return this.subject.pipe(
            filter((e: EmitEvent) => {
                return e.event === event;
            }),
            map((e: EmitEvent) => {
                return e.token;
            })
        )
    }
emit(event: EmitEvent) {
  this.subject.next(event);
}

}
