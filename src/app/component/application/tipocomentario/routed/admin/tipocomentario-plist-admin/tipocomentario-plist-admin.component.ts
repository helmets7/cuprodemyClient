import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPage } from 'src/app/model/generic';
import { ITipocomentario } from 'src/app/model/tipo-comentario-interface';
import { SessionService } from 'src/app/service/session.service';
import { TipocomentarioService } from 'src/app/service/tipocomentario.service';

@Component({
  selector: 'app-tipocomentario-plist-admin',
  templateUrl: './tipocomentario-plist-admin.component.html',
  styleUrls: ['./tipocomentario-plist-admin.component.css']
})
export class TipocomentarioPlistAdminComponent implements OnInit {

  responseFromServer: IPage<ITipocomentario>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  strTipousuario: string = "";

  constructor(
    private oTipocomentarioService: TipocomentarioService,
    private oAuthService: SessionService,
    private oSessionService: SessionService,
    private oRouter: Router
  ) {
/*     this.strTipousuario = this.oAuthService.getTipousuario();
    if (this.strTipousuario != "1") {
      this.oRouter.navigate(['/home']);
    } */
  }

  ngOnInit(): void {
    this.getPage();
  }


  getPage() {
    this.oTipocomentarioService.getTipocomentarioPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<ITipocomentario>) => {
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
