import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ICurso } from 'src/app/model/curso-interface';
import { IPage } from 'src/app/model/generic';
import { CursoService } from 'src/app/service/curso.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-curso-plist-admin',
  templateUrl: './curso-plist-admin.component.html',
  styleUrls: ['./curso-plist-admin.component.css']
})
export class CursoPlistAdminComponent implements OnInit {
  responseFromServer: IPage<ICurso>;
  //
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  strTipousuario: string = "";

  constructor(
    private oCursoService: CursoService,
    private oAuthService: SessionService,
    private oRouter: Router,

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
    this.oCursoService.getCursoPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp: IPage<ICurso>) => {
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
