import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { DecodeService } from '../service/decode.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {



  constructor(
    private oDecodeService: DecodeService,
    private oRouter: Router,
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let tipoUsuario = this.oDecodeService.parseJwt(localStorage.getItem('token')).name;

    console.log(tipoUsuario);

    if (tipoUsuario === "visitor") {


    this.oRouter.navigate(['/visitorElection']);
    return false;



    }else{
      return true;
    }

  }

}
