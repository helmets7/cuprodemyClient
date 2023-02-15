import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPage } from 'src/app/model/generic';
import { ILeccion } from 'src/app/model/leccion-interface';
import { LeccionService } from 'src/app/service/leccion.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-leccion-plist-admin',
  templateUrl: './leccion-plist-admin.component.html',
  styleUrls: ['./leccion-plist-admin.component.css']
})
export class LeccionPlistAdminComponent implements OnInit {

  responseFromServer: IPage<ILeccion>;
  //
  id_cursoFilter: number = 0;
  strTermFilter: string = "";
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  strTipousuario: string = "";

  constructor(
    private oLeccionService: LeccionService,
    private oActivatedRoute: ActivatedRoute,
    private oAuthService: SessionService,
    private oRouter: Router,
      ) {

/*         this.strTipousuario = this.oAuthService.getTipousuario();
        if (this.strTipousuario != "1") {
          this.oRouter.navigate(['/home']);
        } */


        const id_curso =  this.oActivatedRoute.snapshot.params['id_curso'];
      if(id_curso == null){
          this.id_cursoFilter = 0;
      }else{
          this.id_cursoFilter = id_curso;
      }

  }

  ngOnInit(): void {
    this.getPage();
  }


  getPage() {
    this.oLeccionService.getLeccionPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection, this.id_cursoFilter)
    .subscribe({
      next: (resp: IPage<ILeccion>) => {
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

  setFilterByCurso(id: number): void {
    this.id_cursoFilter = id;
    this.getPage();
  }


}
