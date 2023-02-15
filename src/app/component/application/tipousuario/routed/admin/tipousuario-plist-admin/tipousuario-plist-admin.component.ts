import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic';
import { ITipousuario } from 'src/app/model/tipo-usuario.interface';
import { SessionService } from 'src/app/service/session.service';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-plist-admin',
  templateUrl: './tipousuario-plist-admin.component.html',
  styleUrls: ['./tipousuario-plist-admin.component.css']
})
export class TipousuarioPlistAdminComponent implements OnInit {


  responseFromServer: IPage<ITipousuario>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  constructor(
    private oTipousuarioService: TipousuarioService,
    private oAuthService: SessionService,
    private oSessionService: SessionService,
    private oRouter: Router
  ) {

  }

  ngOnInit(): void {
    this.getPage();
  }


  getPage() {
    this.oTipousuarioService.getTipousuarioPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<ITipousuario>) => {
        this.responseFromServer = resp;
        console.log(resp);
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },

      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.setPage(1);
    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }


  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

}
